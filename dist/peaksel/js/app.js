'use strict'

document.addEventListener("DOMContentLoaded",  () => {
    putTableOfContentsIfTagIsPresent()
});

function putTableOfContentsIfTagIsPresent(documentRef ) {
    documentRef = documentRef || document;
    let toc = documentRef.getElementById("toc");
    let headings = [].slice.call(documentRef.body.querySelectorAll('article h1, article h2, article h3, article h4, article h5, article h6'));
    headings.forEach(function (heading, index) {
        let ref = "toc" + index;
        if ( heading.hasAttribute( "id" ) )
            ref = heading.getAttribute( "id" );
        else
            heading.setAttribute( "id", ref );
        let link = documentRef.createElement( "a" );
        link.setAttribute( "href", "#"+ ref );
        link.innerHTML = heading.innerHTML;

        let div = documentRef.createElement( "div" );
        div.setAttribute( "class", heading.tagName.toLowerCase() );
        div.appendChild( link );
        toc.appendChild( div );
    });
}