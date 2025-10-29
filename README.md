# HNG13_TASK2-Vue

A Vue + TypeScript project created for HNG 13 Task 2.

## 🚀 Project Overview

This project is a frontend application built with Vue (and TypeScript) that fulfils the second task in the HNG 13 stream. The codebase uses modern tooling and is structured for clarity and maintainability.

## 🧰 Tech Stack

- Vue (Vue 3)  
- TypeScript  
- CSS (or your preferred styling)  
- ESLint configuration (`eslint.config.mjs`)  
- Configuration files: `tsconfig.json`, `package.json`, etc.  
- Directory structure:  
  ``` bash
   app/
    ├── assets/
        └── css/
            └── tailwind.css
    ├── components/
        ├── auth/
            ├── LoginForm.vue
            └── SignupForm.vue
        ├── header/
            └── HeaderHome.vue
        ├── home/
            ├── About.vue
            └── Hero.vue
        ├── ticket-management/
            ├── CreateTicketDialog.vue
            ├── CreateTicketForm.vue
            ├── DeleteTicketDialog.vue
            ├── EditTicketDialog.vue
            ├── EditTicketForm.vue
            ├── SearchBar.vue
            ├── StatusBadge.vue
            ├── TicketCard.vue
            └── TicketGrid.vue
        ├── ui/
            ├── badge/
                ├── Badge.vue
                └── index.ts
            ├── breadcrumb/
                ├── Breadcrumb.vue
                ├── BreadcrumbEllipsis.vue
                ├── BreadcrumbItem.vue
                ├── BreadcrumbLink.vue
                ├── BreadcrumbList.vue
                ├── BreadcrumbPage.vue
                ├── BreadcrumbSeparator.vue
                └── index.ts
            ├── button/
                ├── Button.vue
                └── index.ts
            ├── card/
                ├── Card.vue
                ├── CardAction.vue
                ├── CardContent.vue
                ├── CardDescription.vue
                ├── CardFooter.vue
                ├── CardHeader.vue
                ├── CardTitle.vue
                └── index.ts
            ├── dialog/
                ├── Dialog.vue
                ├── DialogClose.vue
                ├── DialogContent.vue
                ├── DialogDescription.vue
                ├── DialogFooter.vue
                ├── DialogHeader.vue
                ├── DialogOverlay.vue
                ├── DialogScrollContent.vue
                ├── DialogTitle.vue
                ├── DialogTrigger.vue
                └── index.ts
            ├── field/
                ├── Field.vue
                ├── FieldContent.vue
                ├── FieldDescription.vue
                ├── FieldError.vue
                ├── FieldGroup.vue
                ├── FieldLabel.vue
                ├── FieldLegend.vue
                ├── FieldSeparator.vue
                ├── FieldSet.vue
                ├── FieldTitle.vue
                └── index.ts
            ├── form/
                ├── FormControl.vue
                ├── FormDescription.vue
                ├── FormItem.vue
                ├── FormLabel.vue
                ├── FormMessage.vue
                ├── index.ts
                ├── injectionKeys.ts
                └── useFormField.ts
            ├── input/
                ├── index.ts
                └── Input.vue
            ├── label/
                ├── index.ts
                └── Label.vue
            ├── select/
                ├── index.ts
                ├── Select.vue
                ├── SelectContent.vue
                ├── SelectGroup.vue
                ├── SelectItem.vue
                ├── SelectItemText.vue
                ├── SelectLabel.vue
                ├── SelectScrollDownButton.vue
                ├── SelectScrollUpButton.vue
                ├── SelectSeparator.vue
                ├── SelectTrigger.vue
                └── SelectValue.vue
            ├── separator/
                ├── index.ts
                └── Separator.vue
            ├── sheet/
                ├── index.ts
                ├── Sheet.vue
                ├── SheetClose.vue
                ├── SheetContent.vue
                ├── SheetDescription.vue
                ├── SheetFooter.vue
                ├── SheetHeader.vue
                ├── SheetOverlay.vue
                ├── SheetTitle.vue
                └── SheetTrigger.vue
            ├── sidebar/
                ├── index.ts
                ├── Sidebar.vue
                ├── SidebarContent.vue
                ├── SidebarFooter.vue
                ├── SidebarGroup.vue
                ├── SidebarGroupAction.vue
                ├── SidebarGroupContent.vue
                ├── SidebarGroupLabel.vue
                ├── SidebarHeader.vue
                ├── SidebarInput.vue
                ├── SidebarInset.vue
                ├── SidebarMenu.vue
                ├── SidebarMenuAction.vue
                ├── SidebarMenuBadge.vue
                ├── SidebarMenuButton.vue
                ├── SidebarMenuButtonChild.vue
                ├── SidebarMenuItem.vue
                ├── SidebarMenuSkeleton.vue
                ├── SidebarMenuSub.vue
                ├── SidebarMenuSubButton.vue
                ├── SidebarMenuSubItem.vue
                ├── SidebarProvider.vue
                ├── SidebarRail.vue
                ├── SidebarSeparator.vue
                ├── SidebarTrigger.vue
                └── utils.ts
            ├── skeleton/
                ├── index.ts
                └── Skeleton.vue
            ├── textarea/
                ├── index.ts
                └── Textarea.vue
            └── tooltip/
                ├── index.ts
                ├── Tooltip.vue
                ├── TooltipContent.vue
                ├── TooltipProvider.vue
                └── TooltipTrigger.vue
        ├── universal/
            └── Footer.vue
        └── AppSidebar.vue
    ├── composables/
        ├── useAuth.ts
        ├── useTicketManagement.ts
        └── useTickets.ts
    ├── layouts/
        ├── dashboard.vue
        └── default.vue
    ├── lib/
        ├── validations/
            └── ticket.ts
        ├── toasts.ts
        └── utils.ts
    ├── middleware/
        └── auth.ts
    ├── pages/
        ├── dashboard/
            └── index.vue
        ├── ticket-management/
            └── index.vue
        ├── index.vue
        ├── login.vue
        └── sign-up.vue
    └── plugins/
        ├── oh-vue-icons.client.ts
        ├── sonner.client.ts
        ├── ssr-width.ts
        └── supabase.client.ts
   public/
       ├── favicon.ico
       ├── placeholder.svg
       └── robots.txt
   .gitignore
   components.json
   eslint.config.mjs
   nuxt.config.ts
   package-lock.json
   package.json
   README.md
   tsconfig.json
  ```

## 📦 Installation

1. Clone the repository  
 ```bash
 git clone https://github.com/tolu1123/HNG13_TASK2-Vue-.git
 cd HNG13_TASK2-Vue-
```

2. Install dependencies
 ```bash
npm install
```

3. 🏃 Development
Start the development server:
``` bash
npm run dev
```
 Then open http://localhost:3000 in your browser (or the port your setup uses).

4. 📦 Build & Production
To build the project for production:
```bash
Copy code
npm run build
```

5. 🗂 Directory Structure
Explain key directories/files:

/app – main application source files (components, views, etc)

/public – static assets publicly served

nuxt.config.ts – project configuration (if using Nuxt)

tsconfig.json – TypeScript configuration

eslint.config.mjs – linter configuration

etc.

6. ✅ Features
Built with Vue 3 + TypeScript

Clean project structure

Linting and configuration already in place
 
