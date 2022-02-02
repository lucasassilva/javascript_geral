//importAll(require.context('./assets/css', false, /\.css$/));
importAll(require.context('./assets/img', false, /\.(svg|png|jpg|jpeg|gif)$/));
importAll(require.context('./assets/scss', false, /\.s[ac]ss$/i));
importAll(require.context('./assets/js', false, /\.js$/));
importAll(require.context('./assets/fonts', false, /\.(ttf|otf|eot|svg|woff(2)?)$/));

function importAll(r) {
    return r.keys().map(r);
}





