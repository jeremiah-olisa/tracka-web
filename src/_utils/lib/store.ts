import { Session, User } from '@supabase/supabase-js'
import { reactive } from 'vue'

export interface IStore {
    session: Session | null,
    setSession: (user: Session) => void
    resetSession: () => void
    getUser: () => User | undefined
    getUserName: () => string
}

const store = reactive<IStore>({
    session: null,
    setSession(session: Session) {
        this.session = session
    },
    resetSession() {
        this.session = null
    },
    getUser() {
        return this.session?.user
    },
    getUserName: function (): string {
        return this.getUser()?.user_metadata?.fullName?.toString().split(' ')[0] ?? this.getUser()?.email?.split('@')[0] ?? "Unknown User"
    }
})
export default store;