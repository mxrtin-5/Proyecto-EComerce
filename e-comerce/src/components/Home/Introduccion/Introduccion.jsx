import './Introduccion.css'


const Introduccion = () => {
    return (
        <section className='seccion-introduccion'>
            <div className='div-contenedor-introduccion'>
                <div className="div-container-p">
                    <p className='p-texto-presentacion'>Around 85% of consumers say they use the internet to discover and find local businesses.

                        This is hardly surprising — today, a solid digital presence is a main mode, if not the main mode, of attracting, securing, and retaining customers and clients. And that all starts with a strong website. You would be hard-pressed to find a business of any size that doesn’t have a website at this point in time.

                        Of course, it is not enough to simply have a website. Your website must be a great one — one that will set you apart in a saturated market, no matter what your industry or niche. A top web development company like BairesDev can help you build a digital presence that will make you stand out from the competition and take your business to new heights.
                    </p>
                </div>

                <img className='img-code-introduccion' src="../../../public/Web-development.svg" alt="" />
            </div>

        </section>
    );
}

export default Introduccion;