import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './Galery.module.css';

import ImageView from '../../components/imageView';

import banner from '../../public/img/illustrations/quadro-banner.png'
import quadro1 from '../../public/img/illustrations/quadro1.png'
import quadro2 from '../../public/img/illustrations/quadro2.png'
import quadro3 from '../../public/img/illustrations/quadro3.png'

import controlador from '../../public/img/drawings/controlador.png'
import dependency from '../../public/img/drawings/dependency.png'
import fairy from '../../public/img/drawings/fairy.png'
import carregador from '../../public/img/drawings/carregador.png'
import descanso from '../../public/img/drawings/descanso.png'
import habilities from '../../public/img/drawings/habilities.png'
import flowerPicker from '../../public/img/drawings/flowerPicker.png'
import flowerWarrior from '../../public/img/drawings/flowerWarrior.png'
import magician from '../../public/img/drawings/magician.png'
import maskseller from '../../public/img/drawings/maskseller.png'
import explorer from '../../public/img/drawings/explorer.png'
import mechanic from '../../public/img/drawings/mechanic.png'
import menino from '../../public/img/drawings/menino.jpg'
import passeio from '../../public/img/drawings/passeio.png'
import piloto from '../../public/img/drawings/piloto.png'
import curiosa from '../../public/img/drawings/curiosa.png'
import reader from '../../public/img/drawings/reader.png'
import recovery from '../../public/img/drawings/recovery.png'
import robotUmbrella from '../../public/img/drawings/robot-umbrella.png'
import singing from '../../public/img/drawings/singing.png'
import processo from '../../public/img/drawings/processo.jpg'
import travel from '../../public/img/drawings/travel.png'
import treeGuy from '../../public/img/drawings/tree-guy.png'
import umbrellaGuy from '../../public/img/drawings/umbrella-guy.png'

import ceita from '../../public/img/illustrations/ceita.jpg'
import ciberpunk from '../../public/img/illustrations/ciberpunk1.png'
import curiosity from '../../public/img/illustrations/curiosity.jpg'
import scavenger from '../../public/img/illustrations/scavenger.png'
import postApocalipticHover from '../../public/img/illustrations/postApocalipticHover.jpg'
import hermioneGranger from '../../public/img/illustrations/hermioneGranger.png'
import kvothe from '../../public/img/illustrations/kvothe.jpg'
import afraid from '../../public/img/illustrations/afraid.png'
import ozob from '../../public/img/illustrations/ozob.jpg'
import protection from '../../public/img/illustrations/protection.jpg'
import rizzo from '../../public/img/illustrations/rizzo.png'
import musician from '../../public/img/illustrations/musician.jpg'
import smartphone from '../../public/img/illustrations/smartphone1.png'
import soldado from '../../public/img/illustrations/soldado.jpg'
import thinker from '../../public/img/illustrations/thinker.png'
import GaleryImage from '../galeryImage';

export default function Galery() {

    const [imageSelected, setImageSelected] = useState({});
    const [imageViewOpened, setImageViewOpened] = useState(false);
  
    useEffect(() => {
      console.log('imageSelected: ', imageSelected);
    }, [imageSelected])
  
    const openImageView = (image) => {
      setImageViewOpened(true);
      setImageSelected(image);
    }
  
    const closeImageView = (image) => {
      setImageViewOpened(false);
      setImageSelected({});
    }

    return(
        <main className={styles.galeryContainer} id="portfolio">
            { imageViewOpened ?
                <ImageView imageSelected={imageSelected} closeImageView={closeImageView}/>
                : null
            }

            <div className={styles.galeryBanner}>
                <Image src={banner} placeholder="blur" width={1920} height={700} layout="intrinsic" objectFit="cover" objectPosition="60% top" />
            </div>
            

            <div className={styles.sectionTitle} id="illustrations">
                <h2>ILLUSTRATIONS</h2>
                <p>Seleção de ilustrações</p>
            </div>

            <div className={styles.illustrationGrid}>
                <GaleryImage image={postApocalipticHover} title="Post Apocaliptic Hover" openImageView={openImageView}/>
                <GaleryImage image={ozob} title="Ozob" openImageView={openImageView}/>
                <GaleryImage image={scavenger} title="Scavenger" openImageView={openImageView}/>
                <GaleryImage image={ciberpunk} title="Ciberpunk" openImageView={openImageView}/>
                <GaleryImage image={curiosity} title="Curiosity" openImageView={openImageView}/>
                <GaleryImage image={hermioneGranger} title="HermioneGranger" openImageView={openImageView}/>
                {/* <GaleryImage image={kvothe} title="Kvothe" openImageView={openImageView}/> */}
                <GaleryImage image={afraid} title="Afraid" openImageView={openImageView}/>
                <GaleryImage image={ceita} title="Ceita" openImageView={openImageView}/>
                <GaleryImage image={protection} title="Protection" openImageView={openImageView}/>
                <GaleryImage image={rizzo} title="Rizzo" openImageView={openImageView}/>
                <GaleryImage image={musician} title="Musician" openImageView={openImageView}/>
                <GaleryImage image={smartphone} title="Smartphone" openImageView={openImageView}/>
                <GaleryImage image={soldado} title="Soldado" openImageView={openImageView}/>
                <GaleryImage image={thinker} title="Thinker" openImageView={openImageView}/>
            </div>

            <div className={styles.sectionTitle} id="sketchs">
                <h2>SKETCHES</h2>
                <p>Seleção de sketches</p>
            </div>

            <div className={styles.sketchGrid}>
                <GaleryImage image={controlador} title="controlador" openImageView={openImageView}/>
                <GaleryImage image={dependency} title="dependency" openImageView={openImageView}/>
                <GaleryImage image={fairy} title="fairy" openImageView={openImageView}/>
                <GaleryImage image={carregador} title="carregador" openImageView={openImageView}/>
                <GaleryImage image={descanso} title="descanso" openImageView={openImageView}/>
                <GaleryImage image={habilities} title="habilities" openImageView={openImageView}/>
                <GaleryImage image={flowerPicker} title="flowerPicker" openImageView={openImageView}/>
                <GaleryImage image={flowerWarrior} title="flowerWarrior" openImageView={openImageView}/>
                <GaleryImage image={maskseller} title="maskseller" openImageView={openImageView}/>
                <GaleryImage image={explorer} title="explorer" openImageView={openImageView}/>
                <GaleryImage image={mechanic} title="mechanic" openImageView={openImageView}/>
                <GaleryImage image={magician} title="magician" openImageView={openImageView}/>
                <GaleryImage image={menino} title="menino" openImageView={openImageView}/>
                <GaleryImage image={passeio} title="passeio" openImageView={openImageView}/>
                <GaleryImage image={piloto} title="piloto" openImageView={openImageView}/>
                <GaleryImage image={curiosa} title="curiosa" openImageView={openImageView}/>
                <GaleryImage image={reader} title="reader" openImageView={openImageView}/>
                <GaleryImage image={recovery} title="recovery" openImageView={openImageView}/>
                <GaleryImage image={robotUmbrella} title="robotUmbrella" openImageView={openImageView}/>
                <GaleryImage image={singing} title="singing" openImageView={openImageView}/>
                <GaleryImage image={processo} title="processo" openImageView={openImageView}/>
                <GaleryImage image={travel} title="travel" openImageView={openImageView}/>
                <GaleryImage image={treeGuy} title="treeGuy" openImageView={openImageView}/>
                <GaleryImage image={umbrellaGuy} title="umbrellaGuy" openImageView={openImageView}/>
            </div>
        </main>
    );
}