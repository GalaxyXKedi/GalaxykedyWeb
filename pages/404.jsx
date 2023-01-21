import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolunu Mu Kaybettin Dostum?',
        'Olamaz Çıkmaz Yol.',
        'Polisler Bu Yolu Kapattı Dostum!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

