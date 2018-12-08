// put all the code related to configuration of axios in here
import axios from 'axios';

// set up a preconfigured instance of axios client that has default 
// properties set for where it's going to make a request to or headers and even params

// create method is going to create a instance of the axios client with a couple of default properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2d5b213c5d7a96abf39c7ed377fc99af033cf497a6610cf5dd94b5150cf445ef'
    }
});