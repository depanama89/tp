function containword(chaine: string, search: string): boolean {
  if (chaine.includes(search)) {
    return true;
  } else {
    return false;
  }
}
const chaine = "Hello,bonjour";
const search = "bonjour";
console.log(containword(chaine, search));
