// pages/index.js

function Home() {
  const youtubeVideoId = "8WLNNu78mUk"; // SUBSTITUA PELO ID DO SEU VÍDEO

  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}`;

  return (
    <div className="main-container">
      <div className="content-box">
        <h1>Minha Playlist do YouTube</h1>

        <div className="video-container">
          <iframe
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Minha Playlist do YouTube"
          ></iframe>
        </div>

        <p>
          Este é um exemplo de vídeo da sua playlist que toca automaticamente.
        </p>
      </div>

      {/* --- ESTILOS ATUALIZADOS AQUI --- */}
      <style jsx>{`
        .main-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh; /* Ocupa a tela toda */
          padding: 40px 20px;
        }

        .content-box {
          max-width: 900px;
          width: 100%;
          padding: 20px 30px;
          border-radius: 12px;

          /* Efeito de vidro: fundo branco com transparência */
          background-color: rgba(255, 255, 255, 0.9);

          /* Efeito de "backdrop-filter" para desfocar o fundo (opcional, mas muito legal) */
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);

          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        h1 {
          color: #1a1a1a; /* Cor mais escura para melhor contraste */
          margin-bottom: 30px;
        }

        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          margin-bottom: 20px;
          border-radius: 8px; /* Cantos arredondados no vídeo */
          background: #000;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        p {
          color: #333; /* Cor escura para o parágrafo */
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}

export default Home;
