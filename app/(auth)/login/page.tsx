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
export default function LoginPage() {
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
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={hookForm.handleSubmit(onSubmit)}
        className="w-80 space-y-4"
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
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> logging In to
                your account...
              </>
            ) : (
              <>
                Login <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </FieldGroup>
      </form>
    </div>
  )
}
