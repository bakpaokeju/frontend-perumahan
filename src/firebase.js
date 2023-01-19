import { onUnmounted } from 'vue';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYymB-cQrN_Fdvsg5SfK9AxfqdxpWtMGM",
  authDomain: "crudvue-630a1.firebaseapp.com",
  projectId: "crudvue-630a1",
  storageBucket: "crudvue-630a1.appspot.com",
  messagingSenderId: "509042434773",
  appId: "1:509042434773:web:5cf31dbf762b1bbbd4f85c",
  measurementId: "G-EK5TDV5PXX"
};

const app = initializeApp(firebaseConfig);

export const useAuthState = () => {
  const user = ref(null)
  const error = ref(null)

  const auth = getAuth()
  let unsubscribe
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e => (error.value = e)
    )
  })
  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value != null)

  return (user, error, isAuthenticated)
} 

export const getUserState = () =>
  new Promise((resolve, reject) => {
    onAuthStateChanged(getAuth(), resolve, reject)
  })