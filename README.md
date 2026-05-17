# NAMASTE REACT
# REACT
#Parcel
- Dev Build
- Local Server
- HMR ( hot module replacement )
- file watching algorithm which is written in C++
- Caching - faster builds 
- Image Optimization 
- Minification of file
- bundling
- compress so that size of the file is reduced it will remove all the white spaces from the code.

- Code splitting means breaking your JavaScript bundle into smaller chunks so the browser loads only what it needs.(Home page, Dashboard, Cart Page) With code splitting: 👉 user downloads only Home first ✔️
👉 Dashboard loads only when needed ✔️

- Consistent hashing → “Don’t reshuffle everything when nodes change If one node disappears:
Pizza Eg... or instamart eg.
* you don’t reshuffle everything
* only move forward to next available node”

- Differential bundling → “Different code for different browsers”
- Diagnotics behind the app so that when error comes up it gives us good error handling or better error suggestion
- HTTps
- Tree shaking - removed unused code for us for eg there are couple of functions which are not used by our application then parcel will remove that for us.
- Different build for dev and prod

/*
1. HeaderComponent
  - Logo
  - Nav Items

2. Body
  - Search 
  - Restaurant Container
  - Restaurant Card
    - Image
    - Name
    - Cuisine
    - Rating
3. Footer
  - Links
  - Copyright
  - Contact
  - Address

  Always build from top level component.
*/


REACT HOOKS:
	- Normal JS function
	- Written by Facebook Developer
	- Where it is written it is written inside react where imported from node-modules
	- How to use it?
		○ We need to import it.
	- Two imp hooks
		○ useState() - SuperPowerful State variable in React, used to generate states in React.
		○ useEffect() - 
