import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/auth/',
		name: 'Auth',
		component: () => import('../views/Auth.vue'),
	},
	{
		path: '/profile/:userID(\\d+)',
		name: 'User profile',
		component: () => import('../views/UserProfile.vue'),
	},
	{
		path: '/room/:roomId(\\d+)',
		name: 'Room',
		component: () => import('../views/Room.vue'),
	},
	{
		path: '/createRoom',
		name: 'Room creation',
		component: () => import('../views/NewRoom.vue'),
	},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
