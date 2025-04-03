export const menuItems = [
    {
        name: "Dashboard",
    },
    {
        name: "Wallet Balance",
    },
    {
        name: "Contributions",
        children: [
            { name: "View Contributions", href: "/contributions/view" },
            { name: "Add Contribution", href: "/contributions/add" },
            { name: "Contribution History", href: "/contributions/history" },
        ],
    },
    {
        name: "Loans",
        children: [
            { name: "View Loans", href: "/loans/view" },
            { name: "Request Loan", href: "/loans/request" },
            { name: "Loan History", href: "/loans/history" },
        ],
    },
    {
        name: "Payments",
        children: [
            { name: "View Payments", href: "/payments/view" },
            { name: "Proof of Payments", href: "/payments/proof-of-payments" },
            { name: "Payments History", href: "/payments/history" },
        ],
    },
    {
        name: "Receipts",
        children: [
            { name: "Member's Receipt", href: "/receipts/view" },
            { name: "Treasurer's Receipt", href: "/receipts/add" },
        ],
    },
    {
        name: "Members",
        children: [
            { name: "View Members", href: "/members/view" },
            { name: "Equilizer", href: "/members/equilizer" },
            { name: "Member Roles", href: "/members/roles" },
        ],
    },
    {
        name: "Goals",
        children: [
            { name: "Set Goals", href: "/goals/set" },
            { name: "Track Goals", href: "/goals/track" },
        ],
    },
    {
        name: "Violations",
        children: [
            { name: "View Violations", href: "/violations/view" },
            { name: "Report Violation", href: "/violations/report" },
        ],
    },
    {
        name: "Reports",
        children: [
            { name: "Summary", href: "/reports/summary" },
            { name: "Generate Report", href: "/reports/generate" },
            { name: "Export Report", href: "/reports/export" },
        ],
    },
    {
        name: "Settings",
        children: [
            { name: "Profile Settings", href: "/settings/profile" },
            { name: "Privacy Settings", href: "/settings/privacy" },
        ],
    },
];