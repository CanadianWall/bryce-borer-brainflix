export const API_URL = 'https://project-2-api.herokuapp.com/';
export const API_KEY = '?api_key=cd31aaaa-5c5c-4640-b6a0-97d0bccb3015';

export function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    if (interval < 0.05) {
        return "Just now";
    }
    return Math.floor(seconds) + " seconds ago";
  }

