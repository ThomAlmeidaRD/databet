export default function notify(title: string, options: object) {

    if (!("Notification" in window)) {
        console.log('erro')
        return
    }

    if (Notification.permission === 'granted') {
        new Notification(title, options)
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                new Notification(title, options)
            }
        })
    }

}
