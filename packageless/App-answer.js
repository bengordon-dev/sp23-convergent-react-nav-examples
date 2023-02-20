import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import Biden from './pages/Biden';
import Lincoln from "./pages/Lincoln";
import Washington from "./pages/Washington";
import Home from "./pages/Home";

export default function AppKey() {
  const [page, setPage] = useState("home");
  
  function goHome() {
    setPage("home")
  }

  return (
    <View style={styles.container}>
      {page === "washington" ? <Washington next={() => setPage("lincoln")} goHome={goHome}/>
      : page === "lincoln" ? <Lincoln next={() => setPage("biden")} goHome={goHome}/>
      : page === "biden" ? <Biden goHome={goHome}/>
      : <Home setPage={setPage}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
