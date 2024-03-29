import "./App.scss";
import { Router } from "@reach/router";
import NavigationBar from "./components/NavigationBar";
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Albums from "./pages/Albums";
import AlbumDetails from "./pages/AlbumDetails";
import Playlists from "./pages/Playlists";
import Player from "./pages/Player";
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import TokenContext from "./TokenContext";
import { useState } from "react";

function App() {
	var tokenState = useState(null);

	return (
		<div className="App">
			<TokenContext.Provider value={ tokenState }>
				<Router>
					<Login default />
					<Callback path="/callback" />
					<Featured path="/featured" />
					<Categories path="/categories" />
					<Albums path="/albums" />
					<AlbumDetails path="/albums/:id" />
					<Playlists path="/playlists" />
					<Player path="/player" />
				</Router>
				<NavigationBar className="navigationBar" />
			</TokenContext.Provider>
		</div>
	);
}

export default App;