
import { Myform } from '../components/Myform'
import { Header } from '../components/HeadComponent';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router.js';


export default function Home() {
  const router = useRouter();

  return (
    <article>
      <Header user="Abdelhaq" />
      <section>
        <div id="img-voiture"></div>
        <div id="paragraphe"><p>▷ Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).<br></br>
          Notre expérience est à votre service pour répondre à toutes vos demandes</p>
        </div>
        <hr></hr>
        <div id="FORM"><Myform />
          <button onClick={() => router.push("/page2")} />

        </div>
      </section>
    </article>

  )
}
