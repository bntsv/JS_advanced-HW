let douglasAdamsQuote = "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.";

(function getQuoteWordsByLetter (quote,letter,maxSymbols) {
    return quote
        .split(" ")
        .filter( el=> el.toLowerCase().startsWith(letter))
        .filter(el=>el.length>maxSymbols)
        .forEach(el=>console.log(el))
})(douglasAdamsQuote, "t", 2)



