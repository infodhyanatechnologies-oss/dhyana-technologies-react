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
      <DialogOverlay className="backdrop-blur-sm bg-black/70" />

      <DialogPrimitive.Content
        className={`
          fixed
          left-1/2
          top-1/2
          z-50

          w-[95vw]
          max-w-5xl
          max-h-[90vh]

          -translate-x-1/2
          -translate-y-1/2

          overflow-hidden
          rounded-3xl

          border
          border-slate-200

          bg-white

          shadow-[0_20px_80px_rgba(0,0,0,0.25)]

          animate-in
          fade-in
          zoom-in-95

          duration-300

          ${className}
        `}
        {...props}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b bg-gradient-to-r from-[#BB983C] to-[#D4B15A] px-8 py-5">
          <div>
            <h2 className="text-3xl font-bold text-white">Course Details</h2>

            <p className="mt-1 text-white/80">
              Learn from industry professionals
            </p>
          </div>

          <DialogPrimitive.Close
            className="
            rounded-full
            bg-white/20
            p-2
            text-white
            transition
            hover:bg-white/30
            "
          >
            <X size={22} />
          </DialogPrimitive.Close>
        </div>

        {/* Body */}

        <div className="max-h-[calc(90vh-90px)] overflow-y-auto p-8">
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
