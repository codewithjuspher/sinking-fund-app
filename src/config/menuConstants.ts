import { MENU_ITEM_PARENT, MENU_ITEM_CHILDREN } from "@/shared";

export const MENU_ITEMS = (sinkingId: string) => [
    { id: "dashboard", path:"dashboard", name: MENU_ITEM_PARENT.DASHBOARD, sinkingId },
    { id: "wallet-balance", path:"wallet-balance", name: MENU_ITEM_PARENT.WALLET_BALANCE, sinkingId },
    {
        id: "contributions",
        path:"contributions",
        name: MENU_ITEM_PARENT.CONTRIBUTIONS,
        sinkingId,
        children: [
            { name: MENU_ITEM_CHILDREN.VIEW_CONTRIBUTIONS, path: "contributions/view", sinkingId },
            { name: MENU_ITEM_CHILDREN.ADD_CONTRIBUTIONS, path: "contributions/add", sinkingId },
            { name: MENU_ITEM_CHILDREN.HISTORY_CONTRIBUTIONS, path: "contributions/history", sinkingId },
        ],
    },
    {
        id: "loans",
        path:"loans",
        name: MENU_ITEM_PARENT.LOANS,
        sinkingId,
        children: [
            { name: MENU_ITEM_CHILDREN.VIEW_LOAN, path: "loans/view", sinkingId },
            { name: MENU_ITEM_CHILDREN.REQUEST_LOAN, path: "loans/request", sinkingId },
            { name: MENU_ITEM_CHILDREN.HISTORY_LOAN, path: "loans/history", sinkingId },
        ],
    },
    {
        id: "payments",
        path:"payments",
        name: MENU_ITEM_PARENT.PAYMENTS,
        sinkingId,
        children: [
            { name: MENU_ITEM_CHILDREN.VIEW_PAYMENTS, path: "payments/view", sinkingId },
            { name: MENU_ITEM_CHILDREN.PROOF_OF_PAYMETS, path: "payments/proof-of-payments", sinkingId },
            { name: MENU_ITEM_CHILDREN.HISTORY_PAYMENTS, path: "payments/history", sinkingId },
        ],
    },
    {
        id: "receipts",
        path:"receipts",
        name: MENU_ITEM_PARENT.RECEIPTS,
        sinkingId,
        children: [
            { name: MENU_ITEM_CHILDREN.MEMBER_RECEIPT, path: "receipts/view", sinkingId },
            { name: MENU_ITEM_CHILDREN.TREASURER_RECEIPT, path: "receipts/treasurer", sinkingId },
        ],
    },
    {
        id: "members",
        path:"members",
        name: MENU_ITEM_PARENT.MEMBERS,
        sinkingId,
        children: [
            { name: MENU_ITEM_CHILDREN.VIEW_MEMBERS, path: "members/view", sinkingId },
            { name: MENU_ITEM_CHILDREN.EQUILIZER, path: "members/equilizer", sinkingId },
        ],
    },
    {
        id: "goals",
        path:"goals",
        name: MENU_ITEM_PARENT.GOALS,
        sinkingId,
        children: [
            { name: MENU_ITEM_CHILDREN.SET_GOALS, path: "goals/set", sinkingId },
            { name: MENU_ITEM_CHILDREN.TRACK_GOALS, path: "goals/track", sinkingId },
        ],
    },
    {
        id: "violations",
        path:"violations",
        name: MENU_ITEM_PARENT.VIOLATIONS,
        sinkingId,
        children: [
            { name: MENU_ITEM_CHILDREN.VIEW_VIOLATIONS, path: "violations/view", sinkingId },
            { name: MENU_ITEM_CHILDREN.REPORT_VIOLATION, path: "violations/report", sinkingId },
        ],
    },
    {
        id: "reports",
        path:"reports",
        name: MENU_ITEM_PARENT.REPORTS,
        sinkingId,
        children: [
            { name: MENU_ITEM_CHILDREN.SUMMARY, path: "reports/summary", sinkingId },
            { name: MENU_ITEM_CHILDREN.GENERATE_REPORT, path: "reports/generate", sinkingId },
            { name: MENU_ITEM_CHILDREN.EXPORT_REPORT, path: "reports/export", sinkingId },
        ],
    },
    {
        id: "settings",
        path:"settings",
        name: MENU_ITEM_PARENT.SETTINGS,
        sinkingId,
        children: [
            { name: MENU_ITEM_CHILDREN.PROFILE_SETTINGS, path: "settings/profile", sinkingId },
            { name: MENU_ITEM_CHILDREN.PRIVACY_SETTINGS, path: "settings/privacy", sinkingId },
        ],
    },
];