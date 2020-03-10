	// Authentication Service
	import axios from 'axios'

	const API_URL = 'http://127.0.0.1:8000/api/'

	class AuthService {
		// Login
		login(user) {
			return axios.post(API_URL + 'login', {
				email: user.email,
				password: user.password
			})
			.then(response => { 
					if(response.data.access_token) {
						localStorage.setItem('user', JSON.stringify(response.data));
					}
					
					return response.data;
				});
		}
	
		// Logout
		logout() {
			localStorage.removeItem('user');
		}
	
		register(user){
			return axios.post(API_URL + 'register', {
				email: user.email,
				username: user.username,
				password: user.password
			});
		}

	}

	export default new AuthService();
