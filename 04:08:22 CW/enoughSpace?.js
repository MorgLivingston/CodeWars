
 const enough = (cap, on, wait) => (on + wait) >= cap ? (on + wait) - cap : 0;