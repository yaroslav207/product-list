class Auth {
  constructor({authFB}) {
    this.authFB = authFB;
    this.auth = authFB.getAuth();
  }

  login(authPayload) {
    console.log(authPayload);
    const {email, password} = authPayload;
    return this.authFB.signInWithEmailAndPassword(this.auth, email, password);
  }

  register({email, password}) {
    return this.authFB.createUserWithEmailAndPassword(this.auth, email, password)
        .catch(this._errorHandler);
  }

  logout() {
    return this.authFB.signOut(this.auth);
  }

  onAuthState(callback) {
    const unsubscribe = this.authFB.onAuthStateChanged(this.auth, (user) => {
      if (!user) {
        callback(null);
      } else {
        callback(user);
      }
    });

    return unsubscribe;
  }

  _errorHandler(err) {
    throw err.message;
  };
}

export {Auth};
