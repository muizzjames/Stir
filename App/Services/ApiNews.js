import WordpressApi from "./WordpressApi"
import Constants from './../Common/Constants';

var ApiNews = new WordpressApi({
    url: Constants.URL.root,
    logo: Constants.URL.logo
});

export default ApiNews;
