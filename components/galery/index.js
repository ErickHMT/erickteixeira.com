import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './Galery.module.css';

import ImageView from '../../components/imageView';

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

            {/* <div className={styles.galeryHeader}>
                <span className={styles.mainImage}>
                    <Image onClick={() => openImageView(quadro1)} src={quadro1} placeholder="blur" width={600} height={700} layout="intrinsic" objectFit="cover" />
                </span>
                <span className={styles.mainImage}>
                    <Image onClick={() => openImageView(quadro2)} src={quadro2} placeholder="blur" width={600} height={700} layout="intrinsic" objectFit="cover" />
                </span>
                <span className={styles.mainImage}>
                    <Image onClick={() => openImageView(quadro3)} src={quadro3} placeholder="blur" width={600} height={700} layout="intrinsic" objectFit="cover" />
                </span>
            </div> */}

            <div className={styles.sectionTitle} id="illustrations">
                <h2>ILLUSTRATIONS</h2>
                <p>Seleção de ilustrações</p>
            </div>

            <div className={styles.illustrationGrid}>
                <Image onClick={() => openImageView(ceita)} src={ceita} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(ciberpunk)} src={ciberpunk} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(curiosity)} src={curiosity} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(scavenger)} src={scavenger} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(postApocalipticHover)} src={postApocalipticHover} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(hermioneGranger)} src={hermioneGranger} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(kvothe)} src={kvothe} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(afraid)} src={afraid} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(ozob)} src={ozob} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(protection)} src={protection} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(rizzo)} src={rizzo} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(musician)} src={musician} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(smartphone)} src={smartphone} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(soldado)} src={soldado} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(thinker)} src={thinker} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
            </div>

            <div className={styles.sectionTitle} id="sketchs">
                <h2>SKETCHES</h2>
                <p>Seleção de sketches</p>
            </div>

            <div className={styles.sketchGrid}>
                <Image onClick={() => openImageView(controlador)} src={controlador} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(dependency)} src={dependency} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(fairy)} src={fairy} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(carregador)} src={carregador} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(descanso)} src={descanso} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(habilities)} src={habilities} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(flowerPicker)} src={flowerPicker} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(flowerWarrior)} src={flowerWarrior} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(maskseller)} src={maskseller} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(explorer)} src={explorer} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(mechanic)} src={mechanic} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(magician)} src={magician} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(menino)} src={menino} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(passeio)} src={passeio} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(piloto)} src={piloto} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(curiosa)} src={curiosa} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(reader)} src={reader} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(recovery)} src={recovery} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(robotUmbrella)} src={robotUmbrella} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(singing)} src={singing} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(processo)} src={processo} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(travel)} src={travel} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(treeGuy)} src={treeGuy} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" />
                <Image onClick={() => openImageView(umbrellaGuy)} src={umbrellaGuy} placeholder="blur" width={400} height={400} layout="intrinsic" objectFit="cover" /> 
            </div>
        </main>
    );
}