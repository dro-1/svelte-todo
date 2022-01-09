import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { TodoStore } from "./../stores";

let env = env_var;
env = env.env;

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID,
  appId: env.APP_ID,
};

initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);

export const db = getFirestore();

export const addTodo = async (todo, uid) => {
  try {
    todo.user = uid;
    await addDoc(collection(db, "todos"), todo);
    TodoStore.update((current) => [todo, ...current]);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getTodos = async (uid) => {
  if (!uid) return;
  const q = query(collection(db, "todos"), where("user", "==", uid));
  const querySnapshot = await getDocs(q);
  const docs = [];
  querySnapshot.forEach((doc) =>
    docs.push({
      id: doc.id,
      ...doc.data(),
    })
  );
  TodoStore.set(docs);
};

export const markTodo = async (completed, id) => {
  await updateDoc(doc(db, "todos", id), {
    completed,
  });
  TodoStore.update((current) => {
    let todoIdx = current.findIndex((todo) => todo.id === id);
    current[todoIdx].completed = completed;
    return [...current];
  });
};
