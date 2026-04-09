# Connection issue on an Iphone X with IOS version 16.7.10.

Base imlementation for the voximplant web-sdk-V5 connect to the conference. 

## How to recreate
1) Run with vite `npm run dev`
2) Connect 2 devices to the site one of the devices must be Iphone X
3) Press the connect button on Iphone X first and wait till green text "Conference connected" appears
4) Then tap connect button on the second device

- Expected: Both devices become connected to the same conference
- Actually: Second device stays connected to the conference while the Iphone X reloaded the page(no error was in the console)


> [!IMPORTANT]  
> Add an .env file to the root of the project with credentials to connect user to the voximplant
> VITE_VOX_USER_NAME=[user_login]
> VITE_VOX_PASSWORD=[user password]
> VITE_VOX_NODE=[you user node]
