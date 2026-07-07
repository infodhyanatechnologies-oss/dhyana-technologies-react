"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close {...props} />;
}

function DialogOverlay({
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={`
      fixed
      inset-0
      z-50
      bg-black/60
      backdrop-blur-sm
      animate-in
      fade-in
      duration-300
      ${className}
      `}
      {...props}
    />
  );
}

function DialogContent({
  className = "",
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal>
      <DialogOverlay className="bg-black/70 backdrop-blur-md" />

      <DialogPrimitive.Content
        className={`
          fixed left-1/2 top-1/2 z-50
          w-[95vw] max-w-5xl max-h-[90vh]
          -translate-x-1/2 -translate-y-1/2
          overflow-hidden rounded-3xl

          bg-white

          border border-transparent
          bg-clip-padding

          shadow-2xl shadow-[#0B4DBB]/20

          animate-in fade-in zoom-in-95 duration-300

          before:absolute
          before:inset-0
          before:-z-10
          before:rounded-3xl
          before:p-[1px]
          before:bg-gradient-to-r
          before:from-[#0B4DBB]
          before:via-[#1565C0]
          before:to-[#38A800]
          before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
          before:[mask-composite:exclude]
          before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
          before:[-webkit-mask-composite:xor]

          ${className}
        `}
        {...props}
      >
        {/* Header */}

        <div className="flex items-center justify-between bg-gradient-to-r from-[#0B4DBB] via-[#1565C0] to-[#38A800] px-8 py-6">
          <div>
            <h2 className="text-3xl font-bold text-white">Course Details</h2>

            <p className="mt-1 text-sm text-white/90">
              Learn from industry professionals
            </p>
          </div>

          <DialogPrimitive.Close
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              bg-white/15
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              hover:rotate-90
              hover:scale-110
              hover:bg-white/25
              focus:outline-none
              focus:ring-2
              focus:ring-white/50
            "
          >
            <X size={22} />
          </DialogPrimitive.Close>
        </div>

        {/* Body */}

        <div className="max-h-[calc(90vh-96px)] overflow-y-auto bg-white p-8">
          {children}
        </div>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex flex-col space-y-2 ${className}`} {...props} />;
}

function DialogTitle({
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={`text-2xl font-bold text-slate-900 ${className}`}
      {...props}
    />
  );
}

function DialogDescription({
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={`text-sm text-gray-500 ${className}`}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
