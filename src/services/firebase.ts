// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGEBUCKET,
  messagingSenderId: process.env.FB_MESSAGINGSENDERID,
  appId: process.env.FB_APPID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export async function login(email: string, password: string): Promise<string> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user = userCredential.user
    const token = await user.getIdToken()
    return token
  } catch (error) {
    if (error instanceof Error) {
      console.error("로그인 실패:", error.message)
    } else {
      console.error("로그인 실패:", error)
    }
    throw error
  }
}

export async function sendAuthenticatedRequest(
  url: string,
  method: string,
  body: object,
): Promise<object> {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated")
  }
  const token = await auth.currentUser.getIdToken()
  const response = await fetch(url, {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  return response.json()
}

export async function logout() {
  try {
    await signOut(auth)
    console.log("로그아웃 성공")
  } catch (error) {
    if (error instanceof Error) {
      console.error("로그아웃 실패:", error.message)
    } else {
      console.error("로그아웃 실패:", error)
    }
    throw error
  }
}
