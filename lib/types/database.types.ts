export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      budget_items: {
        Row: {
          budget: string
          budgetId: number
          budgetItemKey: string
          category: string
          createdAt: string
          id: number
          name: string
          spent: number | null
          total: number
          updatedAt: string
        }
        Insert: {
          budget: string
          budgetId: number
          budgetItemKey?: string
          category: string
          createdAt?: string
          id?: number
          name: string
          spent?: number | null
          total: number
          updatedAt?: string
        }
        Update: {
          budget?: string
          budgetId?: number
          budgetItemKey?: string
          category?: string
          createdAt?: string
          id?: number
          name?: string
          spent?: number | null
          total?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "budget_items_budgetId_fkey"
            columns: ["budgetId"]
            isOneToOne: false
            referencedRelation: "budgets"
            referencedColumns: ["id"]
          },
        ]
      }
      budgets: {
        Row: {
          alert: number | null
          budgeted: number
          budgetKey: string
          category: string
          createdAt: string
          endDate: string | null
          id: number
          name: string
          spent: number | null
          startDate: string
          updatedAt: string
          userAccountId: number
        }
        Insert: {
          alert?: number | null
          budgeted: number
          budgetKey?: string
          category: string
          createdAt?: string
          endDate?: string | null
          id?: number
          name: string
          spent?: number | null
          startDate: string
          updatedAt?: string
          userAccountId: number
        }
        Update: {
          alert?: number | null
          budgeted?: number
          budgetKey?: string
          category?: string
          createdAt?: string
          endDate?: string | null
          id?: number
          name?: string
          spent?: number | null
          startDate?: string
          updatedAt?: string
          userAccountId?: number
        }
        Relationships: []
      }
      user_accounts: {
        Row: {
          accountKey: string
          accountName: string
          accountNumber: string
          balance: number
          bankName: string
          createdAt: string
          currency: string
          id: number
          meta: string
          updatedAt: string
          userId: string
        }
        Insert: {
          accountKey?: string
          accountName: string
          accountNumber: string
          balance: number
          bankName: string
          createdAt?: string
          currency: string
          id?: number
          meta: string
          updatedAt?: string
          userId: string
        }
        Update: {
          accountKey?: string
          accountName?: string
          accountNumber?: string
          balance?: number
          bankName?: string
          createdAt?: string
          currency?: string
          id?: number
          meta?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_accounts_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_pins: {
        Row: {
          createdat: string
          id: number
          pin: string
          updatedat: string | null
          userid: string
        }
        Insert: {
          createdat?: string
          id?: number
          pin: string
          updatedat?: string | null
          userid: string
        }
        Update: {
          createdat?: string
          id?: number
          pin?: string
          updatedat?: string | null
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_pins_userid_fkey"
            columns: ["userid"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_pins_userid_fkey1"
            columns: ["userid"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      account_type: "Bank" | "Wallet" | "CreditCard"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
