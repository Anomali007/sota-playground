// components/app-sidebar.tsx
"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  // Shield,
  Lock,
  // EyeOff,
  Mail,
  // RefreshCw,
  // ShoppingCart,
  // User,
  Info,
  Key,
  // AlertCircle,
  // WifiOff,
  ShieldAlert,
  // FileText,
  ChevronDown,
  LogOut,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Demo, demos } from "@/lib/demos"; // Import the demos list

export function AppSidebar() {
  const { open } = useSidebar();

  // Group demos by category
  const demosByCategory = demos.reduce((acc, demo) => {
    const category = demo.category || "Others";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(demo);
    return acc;
  }, {} as { [key: string]: Demo[] });

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className={`flex items-center ${open ? "p-4" : "p-2"}`}>
          <Logo />
          {open && (
            <span className="ml-2 text-xl font-bold truncate">
              The SOTA Lab
            </span>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* User Avatar */}
        <div className={`flex items-center ${open ? "p-4 space-x-2" : "p-2"}`}>
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={`https://github.com/shadcn.png`}
              alt={"Morty Smith"}
            />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          {open && (
            <div className="flex flex-col">
              <p className="font-semibold">Morty Smith</p>
              <Link
                href="/profile"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                View Profile
              </Link>
            </div>
          )}
        </div>
        {/* Menu Items */}
        <SidebarGroup>
          {open && <SidebarGroupLabel>Interactive Demos</SidebarGroupLabel>}
          <SidebarMenu>
            {/* Demos Home */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/demos">
                  <Home />
                  {open && <span>Demos Home</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Iterate over categories */}
            {Object.entries(demosByCategory).map(([category, demos]) =>
              category !== "Others" ? (
                <Collapsible
                  asChild
                  defaultOpen
                  className="group/collapsible"
                  key={category}
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        {/* Use an icon for each category */}
                        {getCategoryIcon(category)}
                        {open && <span>{category}</span>}
                        {open && (
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {open && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {demos.map((demo) => (
                            <SidebarMenuSubItem key={demo.title}>
                              <SidebarMenuSubButton asChild>
                                <Link href={demo.url}>
                                  <demo.icon />
                                  {open && <span>{demo.title}</span>}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                // Demos without a category
                demos.map((demo) => (
                  <SidebarMenuItem key={demo.title}>
                    <SidebarMenuButton asChild>
                      <Link href={demo.url}>
                        <demo.icon />
                        {open && <span>{demo.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              )
            )}
          </SidebarMenu>
        </SidebarGroup>
        {/* Helpful Links */}
        <SidebarGroup>
          {open && <SidebarGroupLabel>Resources</SidebarGroupLabel>}
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/resources/user-guide">
                  <Info />
                  {open && <span>User Guide</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/resources/support">
                  <Mail />
                  {open && <span>Support</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/logout">
                <LogOut />
                {open && <span>Logout</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {open && (
          <>
            <SidebarSeparator />
            <div className="p-4">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} The SOTA Lab
              </p>
            </div>
          </>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}

function Logo() {
  return (
    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
      S
    </div>
  );
}

// Helper function to get category icons
function getCategoryIcon(category: string) {
  switch (category) {
    case "Password Tools":
      return <Lock />;
    case "Security Tutorials":
      return <Key />;
    case "Phishing & Privacy":
      return <Mail />;
    case "Incident Response":
      return <ShieldAlert />;
    default:
      return <Info />;
  }
}
// components/app-sidebar.tsx
// ("use client");

// import Link from "next/link";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
//   SidebarMenuSubItem,
//   SidebarSeparator,
//   useSidebar,
// } from "@/components/ui/sidebar";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   Home,
//   Shield,
//   Lock,
//   EyeOff,
//   Mail,
//   RefreshCw,
//   ShoppingCart,
//   User,
//   Info,
//   Key,
//   AlertCircle,
//   WifiOff,
//   ShieldAlert,
//   FileText,
//   ChevronDown,
//   LogOut,
// } from "lucide-react";

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";

// export function AppSidebar() {
//   const { open } = useSidebar();
//   return (
//     <Sidebar collapsible="icon">
//       <SidebarHeader>
//         <div className={`flex items-center ${open && "p-4"}`}>
//           <Logo />
//           {open && (
//             <span className="ml-2 text-xl font-bold truncate">
//               The SOTA Lab
//             </span>
//           )}
//         </div>
//       </SidebarHeader>
//       <SidebarContent>
//         {/* User Avatar */}
//         <div className={`flex items-center p-2 ${open && "p-4 space-x-2"}`}>
//           <Avatar className="h-8 w-8">
//             <AvatarImage
//               src={`https://github.com/shadcn.png`}
//               alt={"Morty Smith"}
//             />
//             <AvatarFallback>MS</AvatarFallback>
//           </Avatar>
//           {open && (
//             <div className="flex flex-col">
//               <p className="font-semibold">Morty Smith</p>
//               <Link
//                 href="/profile"
//                 className="text-sm text-gray-600 hover:text-gray-900"
//               >
//                 View Profile
//               </Link>
//             </div>
//           )}
//         </div>
//         {/* Menu Items */}
//         <SidebarGroup>
//           <SidebarGroupLabel>Interactive Demos</SidebarGroupLabel>
//           <SidebarMenu>
//             {/* Home */}
//             <SidebarMenuItem>
//               <SidebarMenuButton asChild>
//                 <Link href="/demos">
//                   <Home />
//                   <span>Demos Home</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//             {/* Password Tools Submenu */}
//             <Collapsible asChild defaultOpen className="group/collapsible">
//               <SidebarMenuItem>
//                 <CollapsibleTrigger asChild>
//                   <SidebarMenuButton>
//                     <Lock />
//                     <span>Password Tools</span>
//                     <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
//                   </SidebarMenuButton>
//                 </CollapsibleTrigger>
//                 <CollapsibleContent>
//                   <SidebarMenuSub>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/password-strength-checker">
//                           <Shield />
//                           <span>Password Strength Checker</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/password-cracking-simulation">
//                           <Lock />
//                           <span>Password Cracking Simulation</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                   </SidebarMenuSub>
//                 </CollapsibleContent>
//               </SidebarMenuItem>
//             </Collapsible>
//             {/* Security Tutorials Submenu */}
//             <Collapsible asChild defaultOpen className="group/collapsible">
//               <SidebarMenuItem>
//                 <CollapsibleTrigger asChild>
//                   <SidebarMenuButton>
//                     <Key />
//                     <span>Security Tutorials</span>
//                     <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
//                   </SidebarMenuButton>
//                 </CollapsibleTrigger>
//                 <CollapsibleContent>
//                   <SidebarMenuSub>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/two-factor-auth-tutorial">
//                           <Key />
//                           <span>Two-Factor Auth Tutorial</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/secure-wifi-setup">
//                           <WifiOff />
//                           <span>Secure Wi-Fi Setup</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/device-update-simulator">
//                           <RefreshCw />
//                           <span>Device Update Simulator</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/data-backup-simulator">
//                           <RefreshCw />
//                           <span>Data Backup Simulator</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                   </SidebarMenuSub>
//                 </CollapsibleContent>
//               </SidebarMenuItem>
//             </Collapsible>
//             {/* Phishing and Privacy Submenu */}
//             <Collapsible asChild defaultOpen className="group/collapsible">
//               <SidebarMenuItem>
//                 <CollapsibleTrigger asChild>
//                   <SidebarMenuButton>
//                     <Mail />
//                     <span>Phishing & Privacy</span>
//                     <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
//                   </SidebarMenuButton>
//                 </CollapsibleTrigger>
//                 <CollapsibleContent>
//                   <SidebarMenuSub>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/phishing-simulation">
//                           <Mail />
//                           <span>Phishing Simulation</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/email-phishing-quiz">
//                           <Mail />
//                           <span>Email Phishing Quiz</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/spot-the-secure-website">
//                           <EyeOff />
//                           <span>Spot the Secure Website</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/social-media-privacy">
//                           <User />
//                           <span>Social Media Privacy</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/personal-info-protection-quiz">
//                           <Info />
//                           <span>Personal Info Protection Quiz</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/privacy-policy-review">
//                           <FileText />
//                           <span>Privacy Policy Review</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                   </SidebarMenuSub>
//                 </CollapsibleContent>
//               </SidebarMenuItem>
//             </Collapsible>
//             {/* Incident Response Submenu */}
//             <Collapsible asChild defaultOpen className="group/collapsible">
//               <SidebarMenuItem>
//                 <CollapsibleTrigger asChild>
//                   <SidebarMenuButton>
//                     <ShieldAlert />
//                     <span>Incident Response</span>
//                     <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
//                   </SidebarMenuButton>
//                 </CollapsibleTrigger>
//                 <CollapsibleContent>
//                   <SidebarMenuSub>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/incident-response-scenario">
//                           <ShieldAlert />
//                           <span>Incident Response Scenario</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                     <SidebarMenuSubItem>
//                       <SidebarMenuSubButton asChild>
//                         <Link href="/demos/malware-identification">
//                           <AlertCircle />
//                           <span>Malware Identification</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                   </SidebarMenuSub>
//                 </CollapsibleContent>
//               </SidebarMenuItem>
//             </Collapsible>
//             {/* Secure Transaction Simulation */}
//             <SidebarMenuItem>
//               <SidebarMenuButton asChild>
//                 <Link href="/demos/secure-transaction-simulation">
//                   <ShoppingCart />
//                   <span>Secure Transaction Simulation</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           </SidebarMenu>
//         </SidebarGroup>
//         {/* Helpful Links */}
//         <SidebarGroup>
//           <SidebarGroupLabel>Resources</SidebarGroupLabel>
//           <SidebarMenu>
//             <SidebarMenuItem>
//               <SidebarMenuButton asChild>
//                 <Link href="/resources/user-guide">
//                   <Info />
//                   <span>User Guide</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//             <SidebarMenuItem>
//               <SidebarMenuButton asChild>
//                 <Link href="/resources/support">
//                   <Mail />
//                   <span>Support</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           </SidebarMenu>
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter>
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton asChild>
//               <Link href="/logout">
//                 <LogOut />
//                 <span>Logout</span>
//               </Link>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//         <SidebarSeparator />
//         <div className="p-4">
//           <p className="text-sm">
//             &copy; {new Date().getFullYear()}The SOTA Lab
//           </p>
//         </div>
//       </SidebarFooter>
//     </Sidebar>
//   );
// }

// function Logo() {
//   return (
//     <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
//       S
//     </div>
//   );
// }
