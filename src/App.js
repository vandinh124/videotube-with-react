import React from 'react'

//import non-default with {}
import { Grid } from '@material-ui/core';

//convert default become non-default and import shortcut with more components
import {SearchBar, VideoList, VideoDetail } from './components';

//Same with the import above
// import SearchBar from './components/SearchBar';
// import VideoList from './components/VideoList';
// import VideoDetail from './components/VideoDetail';

//import default
import youtube from './api/youtube'


class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: null,
    }

    //when the app start, the search is empty -> there is nothing on the page
    //componentDidMount will run when the App start with the search = 'pdf ...node'
    componentDidMount(){
        this.handleSubmit('react hook')
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
        params: {
            part: 'snippet',
            maxResults: 5, 
            key: 'youtubeAPI',
            q: searchTerm,
        }
        
    })
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    onVideoSelect = (video) => {

        this.setState({ selectedVideo: video})
    }
    render(){
        const { selectedVideo, videos } = this.state;
        return (
            <Grid justify="center" container spacing={8}>
                <h1 style={{paddingTop: '20px', color: 'red', fontSize: '100px', margin: '0px' }}>VideoTube</h1>
                <Grid item xs={11}>
                    <Grid container spacing={8}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit = {this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

// const App = () => {
//     return (
//         <h1>Youtube</h1>
//     )
// }

export default App;
