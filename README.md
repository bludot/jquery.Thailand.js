## A rewrite of the code to not be dependant on jquery. 

## Todo:

- [ ] Add back support for various db types (actual database, zip, ajax)
- [ ] Create proper building for client or server (lets have it the same thing)
- [x] Write tests
- [ ] add similarity using leven
- [ ] make compatible to use as server side (express plugin or something) and client side

## how you should use:
This comes with a quite large json file and probably not a good idea to ship to production with it. 
My suggestion would be to query to the server for the information instead of doing it all on the client.
Hence I will try to make this usable on both sides.
