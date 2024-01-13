/* Prompt the user to enter their full name Generate username
for them based on their input,Start username with @,followed by full name
and ending with fullname length */

let fullname = prompt ("Enter full name");
let Result = `your full name is @${fullname}${fullname.length}`;
console.log(Result);

