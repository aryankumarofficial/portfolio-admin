"use client"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Login, loginSchema } from "@/schema/Login"
import { useAdminStore } from "@/store/adminStore"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  ArrowRight,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Controller, useForm, useWatch } from "react-hook-form"
import { toast } from "sonner"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
export default function LoginComponent() {
  const [showPassowrd, setShowPassowrd] = useState<boolean>(false)
  const router = useRouter()
  const { admin, clearError, isLoading, login } = useAdminStore()
  const hookForm = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    reValidateMode: "onBlur",
  })

  useEffect(() => {
    if (admin) {
      router.push("/")
    }
  }, [admin, router])

  const currentEmail = useWatch({
    control: hookForm.control,
    name: "email",
  })

  const onSubmit = async ({ email, password }: Login) => {
    try {
      await login(email, password)
      toast.success(`Logged in!`, {
        description: `Welcome back, Admin`,
        duration: 3000,
      })
    } catch (error) {
      toast.error((error as Error)?.message || "Failed to login!")
      clearError()
    } finally {
      hookForm.reset()
    }
  }

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <Card className="w-full sm:max-w-md">
        <CardHeader className="space-y-2 pb-6 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Login to the Portal
          </CardTitle>
          <CardDescription>
            Enter your credentials to access the portal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={hookForm.handleSubmit(onSubmit)}
            className="space-y-4"
            id="login-from"
          >
            <FieldGroup>
              <Controller
                name="email"
                control={hookForm.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="emal">Email</FieldLabel>
                    <InputGroup>
                      <InputGroupAddon>
                        <Mail />
                      </InputGroupAddon>
                      <InputGroupInput
                        id="email"
                        type="email"
                        placeholder="admin@example.com"
                        aria-invalid={fieldState.invalid}
                        {...field}
                      />
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={hookForm.control}
                render={({ field, fieldState }) => (
                  <Field aria-invalid={fieldState.invalid}>
                    <div className="flex items-center justify-between">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <Link
                        href={
                          currentEmail?.trim()
                            ? `/forgot-password?email=${currentEmail?.trim()}`
                            : `/forgot-password`
                        }
                        className="text-xs text-muted-foreground hover:text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <InputGroup>
                      <InputGroupAddon>
                        <LockKeyhole />
                      </InputGroupAddon>
                      <InputGroupInput
                        id="password"
                        type={showPassowrd ? "text" : "password"}
                        placeholder={showPassowrd ? "password123" : "*********"}
                        data-invalid={fieldState.invalid}
                        autoComplete="off"
                        {...field}
                      />
                      <InputGroupButton
                        type="button"
                        onClick={() => setShowPassowrd((prev) => !prev)}
                      >
                        {showPassowrd ? <EyeOff /> : <Eye />}
                      </InputGroupButton>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading}
                size={"lg"}
                className="w-full cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> logging In
                    to your account...
                  </>
                ) : (
                  <>
                    Login <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-muted-foreground">
            wanted to see my profile
            <Link
              href="https://aryankumarofficial.dev"
              className="ml-1 font-medium text-primary hover:text-primary/50"
            >
              portfolio
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}
