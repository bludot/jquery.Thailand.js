## A rewrite of the code to not be dependant on jquery. 

## Major changes:
- get rid of jquery. We want to use this everywhere
- Query just one part of a whole: we can get all districts in a given province. 
  This allows us to show a drop down based on the other input. 
- adding your own dataset through a simple load function
- Process two languages (or just one)

## Examples:
* https://codesandbox.io/s/thailand-address-multilingual-p5rhy


## Todo:

- [ ] Add back support for various db types (actual database, zip, ajax)
- [ ] Create proper building for client or server (lets have it the same thing)
- [x] Write tests
- [ ] add similarity using leven
- [ ] split into a client and server side (basically same code but we get the data differently)
- [ ] Roll up packaging

## how you should use:
This comes with a quite large json file and probably not a good idea to ship to production with it. 
My suggestion would be to query to the server for the information instead of doing it all on the client.
Hence I will try to make this usable on both sides.
