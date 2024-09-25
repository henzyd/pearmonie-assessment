"use client";

import { ErrorMessage, Field, FieldConfig, FieldProps } from "formik";
import { cn } from "~/utils/helpers";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type Props = FieldConfig &
  React.InputHTMLAttributes<HTMLInputElement> & {
    wrapperClassName?: string;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
    label?: string;
    endAdornment?: React.HTMLAttributes<HTMLDivElement>;
  };

export default function FormField({
  className,
  wrapperClassName,
  labelProps,
  label,
  endAdornment,
  ...props
}: Props) {
  return (
    <Field {...props}>
      {({ field }: FieldProps) => (
        <div className={cn("flex w-full flex-col gap-1.5", wrapperClassName)}>
          {label && (
            <div className="flex w-full items-center justify-between">
              <Label
                {...labelProps}
                htmlFor={props.name}
                className={cn(`!text-xs text-[#555555]`, labelProps?.className)}
              >
                {label}:
              </Label>
            </div>
          )}
          <div className="relative flex items-center">
            <Input {...field} {...props} id={props.name} className={cn("w-full", className)} />
            {endAdornment && (
              <div
                {...endAdornment}
                className={cn(
                  "absolute right-0 flex h-[100%] w-[40px] items-center justify-center rounded-md bg-primary p-3 text-base [&>img]:w-4",
                  endAdornment.className
                )}
              >
                {endAdornment.children}
              </div>
            )}
          </div>
          <ErrorMessage
            name={props.name}
            className={`pl-1 !text-xs !font-medium !text-red-600`}
            component={"p"}
          />
        </div>
      )}
    </Field>
  );
}
