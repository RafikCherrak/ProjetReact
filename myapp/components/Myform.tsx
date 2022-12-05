import { redirect } from "next/dist/server/api-utils";
import React from "react";
import Router, { useRouter } from 'next/router';

export const Myform = () => {
    return (
        <form>
            <div id="INSCRIPTION"><h1>INSCRIPTION</h1></div>
            <div id="before-button-radio">Je suis :</div>
            <div id="entreprise-input"><input type="radio" value="entreprise" name="entreprise" /> Une entreprise</div>
            <div id="particulier-input"><input type="radio" value="particulier" name="particulier" /> Un particulier</div>
        </form>
    );
}


export default Myform;

