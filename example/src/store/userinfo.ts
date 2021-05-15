import { create } from '../../../src/index'
import { State } from '../../../src/create'

interface userState extends State {
	count: number
	userInfo: object
	increase: () => void
	getUserInfo: () => Promise<void>
	setUserInfo: (newInfo: object) => void
	submit: () => Promise<void>
}
const useStore = create<userState>((set, get) => ({
	count: 0,
	userInfo: {},
	increase: () => set(state => ({ count: state.count + 1 })),
	getUserInfo: async () => {
		const res = await fetch('http://xieyezi.com:9003/mock/19/daily/genji')
		const json = await res.json()
		const { setUserInfo } = get()
		setUserInfo(json)
	},
	setUserInfo: (newInfo: object) => {
		set({ userInfo: newInfo })
	},

	submit: async () => {
		await fetch('xxxxxx', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({
				name: 'string',
				age: 'number',
				sex: 'string'
			})
		})
		get().getUserInfo()
	}
}))

export default useStore
