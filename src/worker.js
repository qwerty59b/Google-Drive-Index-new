// Software: GDI-JS
// Version: 2.3.6
// Author: Parveen Bhadoo
// Website: https://gdi.js.org

// add multiple serviceaccounts as {}, {}, {}, random account will be selected by each time app is opened.

const environment = 'production'; // This Variable Decides the environment of the app. 'production' or 'development' or 'local'

const serviceaccounts = [];
const randomserviceaccount = serviceaccounts[Math.floor(Math.random() * serviceaccounts.length)]; // DO NOT TOUCH THIS
const domains_for_dl = []
const domain_for_dl = domains_for_dl[Math.floor(Math.random() * domains_for_dl.length)]; // DO NOT TOUCH THIS
const blocked_region = ['']; // add regional codes seperated by comma, eg. ['IN', 'US', 'PK']
const blocked_asn = []; // add ASN numbers from http://www.bgplookingglass.com/list-of-autonomous-system-numbers, eg. [16509, 12345]
const authConfig = {
	"siteName": "GDI", // Website name
	"client_id": "", // Client id from Google Cloud Console
	"client_secret": "", // Client Secret from Google Cloud Console
	"refresh_token": "", // Authorize token
	"service_account": true, // true if you're using Service Account instead of user account
	"service_account_json": randomserviceaccount, // don't touch this one
	"external_service_account": true,
	"files_list_page_size": 50,
	"search_result_list_page_size": 50,
	"enable_cors_file_down": false,
	"enable_password_file_verify": true, // support for .password file
	"direct_link_protection": false, // protects direct links with Display UI
	"disable_anonymous_download": false, // disables direct links without session
	"time_based_downloads": true, // enable time based downloads
	"file_link_expiry": 7, // expire file link in set number of days
	"search_all_drives": true, // search all of your drives instead of current drive if set to true
	"enable_login": false, // set to true if you want to add login system
	"enable_signup": true, // set to true if you want to add signup system
	"enable_social_login": true, // set to true if you want to add social login system
	"google_client_id_for_login": "", // Google Client ID for Login
	"google_client_secret_for_login": "", // Google Client Secret for Login
	"redirect_domain": "", // Domain for login redirect eg. https://example.com
	"login_database": "KV", // KV or Local
	"login_days": 7, // days to keep logged in
	"enable_ip_lock": false, // set to true if you want to lock user downloads to user IP
	"single_session": true, // set to true if you want to allow only one session per user
	"ip_changed_action": false, // set to true if you want to logout user if IP changed
	"use_kv_storage": true,
	"token": "",
	"enable_Telegram_alert": true,
	"Telegram_BotToken" : "",
	"Telegram_ChatID" : "",
	"users_list": [{
			"username": "admin",
			"password": "admin",
		},
		{
			"username": "admin1",
			"password": "admin1",
		}
	],
	"roots": [{
			"id": "",
			"name": "Shared Drive",
			"protect_file_link": false
		},
		{
			"id": "root",
			"name": "root",
			"protect_file_link": false
		},
	]
};
const crypto_base_key = "a4affcad11ea4c7f696e63edaf92095e" // Example 256 bit key used.
const encrypt_iv = new Uint8Array([38, 100, 240, 76, 189, 111, 227, 246, 178, 254, 115, 201, 91, 244, 245, 171]); // Example 128 bit IV used.
const uiConfig = {
	"theme": "darkly", // switch between themes, default set to slate, select from https://gitlab.com/GoogleDriveIndex/Google-Drive-Index
	"version": "2.3.6", // don't touch this one. get latest code using generator at https://bdi-generator.hashhackers.com
	// If you're using Image then set to true, If you want text then set it to false
	"logo_image": true, // true if you're using image link in next option.
	"logo_height": "", // only if logo_image is true
	"logo_width": "100px", // only if logo_image is true
	"favicon": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.2.3/images/favicon.ico",
	// if logo is true then link otherwise just text for name
	"logo_link_name": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.2.3/images/bhadoo-cloud-logo-white.svg",
	"login_image": "https://i.imgur.com/5fHELJr.png", // Login page logo image
	"fixed_header": false, // If you want the header to be flexible or fixed.
	"header_padding": "20", // Value 80 for fixed header, Value 20 for flexible header. Required to be changed accordingly in some themes.
	"nav_link_1": "Home", // change navigation link name 
	"nav_link_3": "Current Path", // change navigation link name
	"nav_link_4": "Contact", // change navigation link name
	"fixed_footer": false, // If you want the footer to be flexible or fixed.
	"hide_footer": true, // hides the footer from site entirely.
	"header_style_class": "navbar-dark bg-secondary", // navbar-dark bg-primary || navbar-dark bg-dark || navbar-light bg-light
	"footer_style_class": "bg-primary", // bg-primary || bg-dark || bg-light
	"css_a_tag_color": "white", // Color Name or Hex Code eg. #ffffff
	"css_p_tag_color": "white", // Color Name or Hex Code eg. #ffffff
	"folder_text_color": "white", // Color Name or Hex Code eg. #ffffff
	"loading_spinner_class": "text-light", // https://getbootstrap.com/docs/5.0/components/spinners/#colors
	"search_button_class": "btn btn-danger", // https://getbootstrap.com/docs/5.0/components/buttons/#examples
	"path_nav_alert_class": "alert alert-primary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
	"file_view_alert_class": "alert alert-danger", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
	"file_count_alert_class": "alert alert-secondary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
	"contact_link": "https://telegram.dog/Telegram", // Link to Contact Button on Menu
	"copyright_year": "2050", // year of copyright, can be anything like 2015 - 2020 or just 2020
	"company_name": "The Bay Index", // Name next to copyright
	"company_link": "https://telegram.dog/Telegram", // link of copyright name
	"credit": true, // Set this to true to give us credit
	"display_size": true, // Set this to false to hide display file size
	"display_time": false, // Set this to false to hide display modified time for folder and files
	"display_download": true, // Set this to false to hide download icon for folder and files on main index
	"disable_player": false, // Set this to true to hide audio and video players
	"disable_video_download": false, // Remove Download, Copy Button on Videos
	"allow_selecting_files": true, // Disable Selecting Files to Download in Bulk
	"second_domain_for_dl": true, // If you want to display other URL for Downloading to protect your main domain.
	"poster": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.2.3/images/poster.jpg", // Video poster URL or see Readme to how to load from Drive
	"audioposter": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.2.3/images/music.jpg", // Video poster URL or see Readme to how to load from Drive
	"jsdelivr_cdn_src": "https://cdn.jsdelivr.net/npm/@googledrive/index", // If Project is Forked, then enter your GitHub repo
	"render_head_md": true, // Render Head.md
	"render_readme_md": true, // Render Readme.md
	"unauthorized_owner_link": "https://telegram.dog/Telegram", // Unauthorized Error Page Link to Owner
	"unauthorized_owner_email": "abuse@telegram.org", // Unauthorized Error Page Owner Email
	"downloaddomain": domain_for_dl, // Ignore this and set domains at top of this page after service accounts.
	"show_logout_button": authConfig.enable_login ? true : false, // set to true if you want to add logout button
	"allow_file_copy": true, // set to false if you want to disable file copy
};

const player_config = {
	"player": "videojs", // videojs || plyr || dplayer || jwplayer
	"videojs_version": "8.3.0", // Change videojs version in future when needed.
	"plyr_io_version": "3.7.8",
	"jwplayer_version": "8.16.2"
}

// DON'T TOUCH BELOW THIS UNLESS YOU KNOW WHAT YOU'RE DOING
var gds = [];
const drive_list = authConfig.roots.map(it => it.id)
let app_js_file
if (environment === 'production') {
	app_js_file = uiConfig.jsdelivr_cdn_src + '@' + uiConfig.version + '/src/app.min.js'
} else if (environment === 'development') {
	app_js_file = '/app.js'
} else if (environment === 'local') {
	app_js_file = 'http://127.0.0.1:5500/src/app.js'
}

function html(current_drive_order = 0, model = {}) {
	return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
  <title>${authConfig.siteName}</title>
  <meta name="robots" content="noindex" />
  <link rel="icon" href="${uiConfig.favicon}">
  <style>
  .navbar-brand {font-family: Cinemathic Visualation;font-size: 30px;}.footer-text {font-family: Cinemathic Visualation;font-size: 40px;}a {color:white;}p {color:white;} .logo_new {font-family: Cinemathic Visualation;font-size: 50px;color:white;} .loading {position: fixed;z-index: 999;height: 2em;width: 2em;overflow: show;margin: auto;top: 0;left: 0;bottom: 0;right: 0;}.loading:before {content: '';display: block;position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));}.loading:not(:required) {font: 0/0 a;color: transparent;text-shadow: none;background-color: transparent;border: 0;}.loading:not(:required):after {content: '';display: block;font-size: 10px;width: 1em;height: 1em;margin-top: -0.5em;-webkit-animation: spinner 150ms infinite linear;-moz-animation: spinner 150ms infinite linear;-ms-animation: spinner 150ms infinite linear;-o-animation: spinner 150ms infinite linear;animation: spinner 150ms infinite linear;border-radius: 0.5em;-webkit-box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;}@-webkit-keyframes spinner {0% {-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);-o-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);-o-transform: rotate(360deg);transform: rotate(360deg);}}@-moz-keyframes spinner {0% {-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);-o-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);-o-transform: rotate(360deg);transform: rotate(360deg);}}@-o-keyframes spinner {0% {-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);-o-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);-o-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes spinner {0% {-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);-o-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);-o-transform: rotate(360deg);transform: rotate(360deg);}}	  </style>
  <script>
  window.drive_names = JSON.parse('${JSON.stringify(authConfig.roots.map(it => it.name))}');
  window.MODEL = JSON.parse('${JSON.stringify(model)}');
  window.current_drive_order = ${current_drive_order};
  window.UI = JSON.parse('${JSON.stringify(uiConfig)}');
  window.player_config = JSON.parse('${JSON.stringify(player_config)}');
  </script>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/${uiConfig.theme}/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  <style>a{color:${uiConfig.css_a_tag_color};}p{color:${uiConfig.css_p_tag_color};}</style>
  <script src="${app_js_file}"></script>
  <script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.12.313/build/pdf.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/marked@5.1.1/lib/marked.umd.min.js"></script>
</head>
<body>
</body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
  </html>`;
};

const homepage = `<!DOCTYPE html>
<html>
   <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no">
    <title>${authConfig.siteName}</title>
    <meta name="robots" content="noindex">
    <link rel="icon" href="${uiConfig.favicon}">
    <script>
      window.drive_names = JSON.parse('${JSON.stringify(authConfig.roots.map(it => it.name))}');
      window.UI = JSON.parse('${JSON.stringify(uiConfig)}');
    </script>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/${uiConfig.theme}/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <style>a{color:${uiConfig.css_a_tag_color};}p{color:${uiConfig.css_p_tag_color};}</style>
   </head>
   <body>
    <header>
     <div id="nav">
      <nav class="navbar navbar-expand-lg${uiConfig.fixed_header ?' fixed-top': ''} ${uiConfig.header_style_class}">
         <div class="container-fluid">
         <a class="navbar-brand" href="/">${uiConfig.logo_image ? '<img border="0" alt="'+uiConfig.company_name+'" src="'+uiConfig.logo_link_name+'" height="'+uiConfig.height+'" width="'+uiConfig.logo_width+'">' : uiConfig.logo_link_name}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/">${uiConfig.nav_link_1}</a>
            </li>
            <li class="nav-item dropdown">
               <div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="/">&gt; ${uiConfig.nav_link_1}</a></div>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="${uiConfig.contact_link}" target="_blank">${uiConfig.nav_link_4}</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="/find" target="_self">Public Files</a>
            </li>
            ${authConfig.enable_login ?'<li class="nav-item"><a class="nav-link" href="/profile">Profile</a></li>': ''}
            ${uiConfig.show_logout_button ?'<li class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>': ''}
           </ul>
           <form class="d-flex" method="get" action="/0:search">
            <input class="form-control me-2" name="q" type="search" placeholder="Search" aria-label="Search" value="" required="">
            <button class="btn btn btn-danger" onclick="if($('#search_bar_form>input').val()) $('#search_bar_form').submit();" type="submit">Search</button>
           </form>
          </div>
         </div>
      </nav>
     </div>
    </header>
    <div>
     <div id="content" style="padding-top: ${uiConfig.header_padding}px;">
      <div class="container">
         <div class="alert alert-primary d-flex align-items-center" role="alert" style="margin-bottom: 0; padding-bottom: 0rem;">
          <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
           <ol class="breadcrumb" id="folderne">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
           </ol>
          </nav>
         </div>
         <div id="list" class="list-group text-break">

         </div>
         <div class="${uiConfig.file_count_alert_class} text-center" role="alert" id="count">Total <span id="n_drives" class="number text-center"></span> drives</div>
      </div>
     </div>
     <div class="modal fade" id="SearchModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="SearchModelLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
          <div class="modal-header">
           <h5 class="modal-title" id="SearchModelLabel"></h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
           <span aria-hidden="true"></span>
           </button>
          </div>
          <div class="modal-body" id="modal-body-space">
          </div>
          <div class="modal-footer" id="modal-body-space-buttons">
          </div>
         </div>
      </div>
     </div>
     <br>
     <footer class="footer mt-auto py-3 text-muted ${uiConfig.footer_style_class}" style="${uiConfig.fixed_footer ?'position: fixed; ': ''}left: 0; bottom: 0; width: 100%; color: white; z-index: 9999;${uiConfig.hide_footer ? ' display:none;': ' display:block;'}"> <div class="container" style="width: auto; padding: 0 10px;"> <p class="float-end"> <a href="#">Back to top</a> </p> ${uiConfig.credit ? '<p>Redesigned with <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /> </svg> by <a href="https://www.npmjs.com/package/@googledrive/index" target="_blank">TheFirstSpeedster</a>, based on Open Source Softwares.</p>' : ''} <p>© ${uiConfig.copyright_year} - <a href=" ${uiConfig.company_link}" target="_blank"> ${uiConfig.company_name}</a>, All Rights Reserved.</p> </div> </footer>
    </div>
   </body>
  <script src="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/homepage.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
</html>`

const login_html = `<html>
   <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Sign in - ${authConfig.siteName}</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="robots" content="noindex, nofollow">
    <meta name="googlebot" content="noindex, nofollow">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="${uiConfig.favicon}">
    <script type="text/javascript" src="//code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <style id="compiled-css" type="text/css">.login,.image{min-height:100vh}.bg-image{background-image:url('https://cdn.jsdelivr.net/gh/logingateway/images@1.0/background.jpg');background-size:cover;background-position:center center}#error-message{display:none}</style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <style>
     .logo {
     font-family: 'Orbitron', sans-serif;
     color: #007bff;
     }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script>
     $(document).ready(function(){
      $("#btn-login").click(function() {
        const formData = new URLSearchParams();
        formData.append('username', $("#email").val());
        formData.append('password', $("#password").val());
        
        fetch('/login', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formData.toString()
        })
          .then(res => res.json())
          .then(data => {
          if (!data.ok) {
            document.getElementById("error-message").style.display = "block";
            document.getElementById("error-message").innerHTML = "Invalid Credentials";
          } else {
            window.location.reload();
          }
          }).catch(err => {
			document.getElementById("error-message").style.display = "block";
			document.getElementById("error-message").innerHTML = "Something went wrong, report issue to Admin";
		  });
      });	
      const queryparams = new URLSearchParams(window.location.search);
      if (queryparams.get('error')) {
         document.getElementById("error-message").style.display = "block";
         document.getElementById("error-message").innerHTML = queryparams.get('error');
      }		  
     });
    </script>
   </head>
   <body>
    <div class="container-fluid">
     <div class="row no-gutter">
      <div class="col-md-6 d-none d-md-flex bg-image"></div>
      <div class="col-md-6 bg-light">
         <div class="login d-flex align-items-center py-5">
          <div class="container">
           <div class="row">
            <div class="col-lg-10 col-xl-7 mx-auto">
              <img src="${uiConfig.login_image}" class="img-fluid" style="width: 150px; display: block; margin-left: auto; margin-right: auto; margin-bottom: 20px;">
               <div id="error-message" class="alert alert-danger"></div>
               <form onsubmit="return false;" method="post">
                <p id="error" style="color:red;"></p>
                <div class="form-group mb-3">
                 <input id="email" type="text" placeholder="Username" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" required>
                </div>
                <div class="form-group mb-3">
                 <input id="password" type="password" placeholder="Password" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" required>
                </div>
                <button id="btn-login" type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Login</button>
                ${authConfig.enable_signup ? `<a href="/signup" class="btn btn-outline-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm">Signup</a>` : ''}
                ${authConfig.enable_signup ? `<a href="/forget" class="btn btn-outline-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm">Forget Password</a>` : ''}
               </form>
               <hr class="solid"> 
               ${authConfig.enable_social_login ? `<div id="allsociallogins" style="display:block;">
              <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=`+authConfig.google_client_id_for_login+`&redirect_uri=`+authConfig.redirect_domain+`/google_callback&response_type=code&scope=email%20profile&response_mode=query" id="btn-google" class="btn btn-block btn-social btn-google"><span class="fa fa-google"></span> Sign in with Google</a>
               </div>` : ''}
            </div>
           </div>
          </div>
         </div>
         <center>
          <p>
           &copy; <script>document.write(new Date().getFullYear())</script> ${uiConfig.company_name}
          </p>
         </center>
      </div>
     </div>
    </div>
   </body>
</html>`

const forget_html = `<html>
   <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Recover Password - ${authConfig.siteName}</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="robots" content="noindex, nofollow">
    <meta name="googlebot" content="noindex, nofollow">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="${uiConfig.favicon}">
    <script type="text/javascript" src="//code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <style id="compiled-css" type="text/css">.login,.image{min-height:100vh}.bg-image{background-image:url('https://cdn.jsdelivr.net/gh/logingateway/images@1.0/background.jpg');background-size:cover;background-position:center center}#error-message{display:none}</style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <style>
     .logo {
     font-family: 'Orbitron', sans-serif;
     color: #007bff;
     }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script>
     $(document).ready(function(){
      $("#btn-login").click(function() {
        const formData = new URLSearchParams();
        var errorMessage = document.getElementById('error-message');
        errorMessage.style.display = "block";
        errorMessage.className = 'alert alert-info';
        document.getElementById("error-message").innerHTML = "Processing...";
        formData.append('username', $("#email").val());        
        fetch('/forget', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formData.toString()
        })
          .then(res => res.json())
          .then(data => {
          if (!data.ok) {
            document.getElementById("error-message").style.display = "block";
            errorMessage.className = 'alert alert-danger';
            document.getElementById("error-message").innerHTML = "Failed to Recover, Make sure your email is correct.";
          } else {
            document.getElementById("error-message").style.display = "block";
            errorMessage.className = 'alert alert-info';
            document.getElementById("error-message").innerHTML = "Account Recovery Email Sent Successfully.";
          }
          });
      });	
      const queryparams = new URLSearchParams(window.location.search);
      if (queryparams.get('error')) {
         document.getElementById("error-message").style.display = "block";
         document.getElementById("error-message").innerHTML = queryparams.get('error');
      }		  
     });
    </script>
   </head>
   <body>
    <div class="container-fluid">
     <div class="row no-gutter">
      <div class="col-md-6 d-none d-md-flex bg-image"></div>
      <div class="col-md-6 bg-light">
         <div class="login d-flex align-items-center py-5">
          <div class="container">
           <div class="row">
            <div class="col-lg-10 col-xl-7 mx-auto">
              <img src="${uiConfig.login_image}" class="img-fluid" style="width: 150px; display: block; margin-left: auto; margin-right: auto; margin-bottom: 20px;">
               <div id="error-message" class="alert alert-danger"></div>
               <form onsubmit="return false;" method="post">
                <p id="error" style="color:red;"></p>
                <div class="form-group mb-3">
                 <input id="email" type="text" placeholder="Username" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" required>
                </div>
                <button id="btn-login" type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Recover</button>
               </form>
               <hr class="solid"> 
               ${authConfig.enable_social_login ? `<div id="allsociallogins" style="display:block;">
              <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=`+authConfig.google_client_id_for_login+`&redirect_uri=`+authConfig.redirect_domain+`/google_callback&response_type=code&scope=email%20profile&response_mode=query" id="btn-google" class="btn btn-block btn-social btn-google"><span class="fa fa-google"></span> Sign in with Google</a>
               </div>` : ''}
            </div>
           </div>
          </div>
         </div>
         <center>
          <p>
           &copy; <script>document.write(new Date().getFullYear())</script> ${uiConfig.company_name}
          </p>
         </center>
      </div>
     </div>
    </div>
   </body>
</html>`

function profile_html(user_email, logged_ip, daily_downloads, total_downloads) {
	return `<html>
<head>
   <meta http-equiv="content-type" content="text/html; charset=UTF-8">
   <title>Profile - ${authConfig.siteName}</title>
   <meta http-equiv="content-type" content="text/html; charset=UTF-8">
   <meta name="robots" content="noindex, nofollow">
   <meta name="googlebot" content="noindex, nofollow">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="icon" href="${uiConfig.favicon}">
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
   <style id="compiled-css" type="text/css">.login,.image{min-height:100vh}.bg-image{background-image:url('https://cdn.jsdelivr.net/gh/logingateway/images@1.0/background.jpg');background-size:cover;background-position:center center}#error-message{display:none}</style>
   <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</head>
<body>
   <div class="container-fluid">
      <div class="row no-gutter">
         <div class="col-md-12 bg-light">
            <div class="login d-flex align-items-center py-5">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-10 col-xl-7 mx-auto">
                        <center>
                        <h3 class="display-4"><img onClick="window.location.reload();" src="${uiConfig.login_image}" width="220"></h3>
                        <p class="text-muted mb-4">Change Password</p>
                        <div id="error-message" class="alert alert-danger"></div>
                        <form id="login_form">
                           <div class="form-group mb-3">
                              <input id="email" type="email" placeholder="Email address" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" value="${user_email}" disabled required>
                           </div>
                           <div class="form-group mb-3">
                              <input id="password" type="password" placeholder="Current Password" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" required>
                           </div>
                           <div class="form-group mb-3">
                              <input id="new_password" type="password" placeholder="New Password" minlength="8" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" required>
                           </div>
                           <button id="btn-change" type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Change Password</button>
                           <a id="btn-homepage" href="/" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Homepage</a>
                           <hr class="solid">
						   <center>
						   <div class="text-center d-flex justify-content-between mt-4"><p class="font-italic text-muted">Logged IP: ${logged_ip}</p></div>
						   <div class="text-center d-flex justify-content-between mt-4"><p class="font-italic text-muted">Daily Downloads: ${daily_downloads}/100</p></div>
						   <div class="text-center d-flex justify-content-between mt-4"><p class="font-italic text-muted">Total Downloads: ${total_downloads}/Unlimited</p>
						   </div>
						   </center>
                        </form>
                        <div id="processing" style="display:none;">
                           <center>
                           <div class="spinner-border text-danger" role="status">
                             <span class="sr-only">Loading...</span>
                           </div>
                           </center>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</body>
<script>
async function getCookie(name) {
    var match = document.cookie.match(new RegExp(name + "=([^;]+)"));
    return match ? decodeURIComponent(match[1]) : null;
  }
  
  $(document).ready(function() {
    // Retrieve user email from cookie and set it in the email input field
    getCookie('user_email').then(function(user_email) {
      document.getElementById("email").value = user_email;
    });
  
    // Click event handler for the "Change Password" button
    $("#btn-change").click(function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Create form data
      const formData = new URLSearchParams();
      formData.append('username', $("#email").val());
      formData.append('password', $("#password").val());
      formData.append('new_password', $("#new_password").val());
  
      // Display "Processing Request..." message
      var errorMessage = document.getElementById('error-message');
      document.getElementById("error-message").style.display = "block";
      errorMessage.className = 'alert alert-info';
      document.getElementById("error-message").innerHTML = "Processing Request...";

      // Send AJAX request to change password
      fetch('/change_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString()
      })
      .then(res => res.json())
      .then(data => {
        // Handle response data
        if (!data.ok) {
          // Display error message if password change failed
          document.getElementById("error-message").style.display = "block";
          errorMessage.className = 'alert alert-danger';
          document.getElementById("error-message").innerHTML = "Failed to Create Password, Error: " + data.error;
        } else {
          // Display success message if password change succeeded
          document.getElementById("error-message").style.display = "block";
          errorMessage.className = 'alert alert-success';
          document.getElementById("error-message").innerHTML = "Password Changed Successfully.";
        }
      });
    });
  
    // Handle query parameter error message (if present)
    const queryparams = new URLSearchParams(window.location.search);
    if (queryparams.get('error')) {
      var errorMessage = document.getElementById('error-message');
      document.getElementById("error-message").style.display = "block";
      errorMessage.className = 'alert alert-danger';
      document.getElementById("error-message").innerHTML = queryparams.get('error');
    }
  });  
</script>
</html>`
}

const signup_html = `<html>
   <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Sign UP - ${authConfig.siteName}</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="robots" content="noindex, nofollow">
    <meta name="googlebot" content="noindex, nofollow">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="${uiConfig.favicon}">
    <script type="text/javascript" src="//code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <style id="compiled-css" type="text/css">.login,.image{min-height:100vh}.bg-image{background-image:url('https://cdn.jsdelivr.net/gh/logingateway/images@1.0/background.jpg');background-size:cover;background-position:center center}#error-message{display:none}</style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <style>
     .logo {
     font-family: 'Orbitron', sans-serif;
     color: #007bff;
     }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script>
     $(document).ready(function(){
      $("#btn-login").click(function() {
        const formData = new URLSearchParams();
        formData.append('username', $("#email").val());
        formData.append('password', $("#password").val());
		var errorMessage = document.getElementById('error-message');
		document.getElementById("error-message").style.display = "block";
		errorMessage.className = 'alert alert-info';
		document.getElementById("error-message").innerHTML = "Processing Request...";
        fetch('/signup_api', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formData.toString()
        })
          .then(res => res.json())
          .then(data => {
          if (!data.ok) {
            document.getElementById("error-message").style.display = "block";
			errorMessage.className = 'alert alert-danger';
            document.getElementById("error-message").innerHTML = "Failed to Create Account, Error: " + data.error;
          } else {
            document.getElementById("error-message").style.display = "block";
			errorMessage.className = 'alert alert-success';
            document.getElementById("error-message").innerHTML = "Account Created, Please Login";
          }
          });
      });	
      const queryparams = new URLSearchParams(window.location.search);
      if (queryparams.get('error')) {
         document.getElementById("error-message").style.display = "block";
		 errorMessage.className = 'alert alert-danger';
         document.getElementById("error-message").innerHTML = queryparams.get('error');
      }		  
     });
    </script>
   </head>
   <body>
    <div class="container-fluid">
     <div class="row no-gutter">
      <div class="col-md-6 d-none d-md-flex bg-image"></div>
      <div class="col-md-6 bg-light">
         <div class="login d-flex align-items-center py-5">
          <div class="container">
           <div class="row">
            <div class="col-lg-10 col-xl-7 mx-auto">
               <h3 class="logo text-center mb-3">${authConfig.siteName}</h3>
               <div id="error-message" class="alert alert-danger"></div>
               <form onsubmit="return false;" method="post">
                <p id="error" style="color:red;"></p>
                <div class="form-group mb-3">
                 <input id="email" type="text" placeholder="Username" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" required>
                </div>
                <div class="form-group mb-3">
                 <input id="password" type="password" placeholder="Password" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" required>
                </div>
                <button id="btn-login" type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">SIGNUP</button>
                <a href="/login" class="btn btn-outline-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm">LOGIN</a>
               </form>
               <hr class="solid">
               ${authConfig.enable_social_login ? `<div id="allsociallogins" style="display:block;">
              <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=`+authConfig.google_client_id_for_login+`&redirect_uri=`+authConfig.redirect_domain+`/google_callback&response_type=code&scope=email%20profile&response_mode=query" id="btn-google" class="btn btn-block btn-social btn-google"><span class="fa fa-google"></span> Sign in with Google</a>
               </div>` : ''}
            </div>
           </div>
          </div>
         </div>
         <center>
          <p>
           &copy; <script>document.write(new Date().getFullYear())</script> ${uiConfig.company_name}
          </p>
         </center>
      </div>
     </div>
    </div>
   </body>
</html>`

const find_files = `<!DOCTYPE html>
<html>
<head>
   <meta http-equiv="content-type" content="text/html; charset=UTF-8">
   <title>Find Files - ${authConfig.siteName}</title>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="icon" href="${uiConfig.favicon}">
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
   <style id="compiled-css" type="text/css">.image{min-height:100vh}.bg-image{background-image:url('https://cdn.jsdelivr.net/gh/logingateway/images@1.0/background.jpg');background-size:cover;background-position:center center}</style>
   <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</head>
<body>
   <div class="container-fluid">
      <div class="row no-gutter">
         <div class="col-md-12 bg-light">
            <div class="image d-flex align-items-center py-5">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-10 col-xl-7 mx-auto">
                        <center>
                        <h4 class="display-4 mb-5">Download Public Files</h4>
                        <form id="download_form">
                           <div class="form-group mb-3">
                              <input id="gdrive_link" type="text" placeholder="Paste Google Drive link here" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" required>
                           </div>
                           <button id="btn-download" type="button" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Convert</button>
                        </form>
                        <div id="error-message" class="alert alert-danger" style="display:none;"></div>
                        </center>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</body>
<script>
$(document).ready(function() {
  $("#btn-download").click(function() {
    const gdriveLink = $("#gdrive_link").val().trim();

    if (gdriveLink.length > 23) {
      if (gdriveLink.includes("drive.google.com")) {
        const fileId = extractLongestSubstring(gdriveLink);
        if (fileId) {
          const redirectUrl = gdriveLink.includes("/folder/") ? "/findpath?id=" + fileId : "/findpath?id=" + fileId + "&a=view";
          window.location.href = redirectUrl;
        } else {
          displayError("No valid substrings found.");
        }
      } else {
        displayError("Link must start with 'drive.google.com'.");
      }
    } else {
      displayError("Link is too short.");
    }
  });

  function extractLongestSubstring(link) {
    const matches = link.match(/[a-zA-Z0-9_-]{23,}/g);
    if (matches) {
      const longestMatch = matches.reduce(function(a, b) {
        return a.length > b.length ? a : b;
      });
      return longestMatch;
    }
    return null;
  }

  function displayError(errorMessage) {
    const errorMessageElement = $("#error-message");
    errorMessageElement.text(errorMessage);
    errorMessageElement.show();
  }
});
</script>
</html>
`

const not_found = `<!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
  <title>Error 404 (Not Found)!!1</title>
  <style>
  *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
  <p><b>404.</b> <ins>That’s an error.</ins>
  <p id="status"></p>

  <script>
  document.getElementById("status").innerHTML =
"The requested URL <code>" + window.location.pathname + "</code> was not found on this server.  <ins>That’s all we know.</ins>";
  </script>`

const asn_blocked = `<html>
  <head>
  <title>Access Denied</title>
  <link href='https://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
  <style>
  body{
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    color:#b0bec5;
    display:table;
    font-weight:100;
    font-family:Lato
  }
  .container{
    text-align:center;
    display:table-cell;
    vertical-align:middle
  }
  .content{
    text-align:center;
    display:inline-block
  }
  .message{
    font-size:80px;
    margin-bottom:40px
  }
  a{
    text-decoration:none;
    color:#3498db
  }

  </style>
  </head>
  <body>
  <div class="container">
  <div class="content">
  <div class="message">Access Denied</div>
  </div>
  </div>
  </body>
  </html>`

const directlink = `
  <html>
  <head>
  <title>Direct Link - Access Denied</title>
  <link href='https://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
  <style>
  body{
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    color:#b0bec5;
    display:table;
    font-weight:100;
    font-family:Lato
  }
  .container{
    text-align:center;
    display:table-cell;
    vertical-align:middle
  }
  .content{
    text-align:center;
    display:inline-block
  }
  .message{
    font-size:80px;
    margin-bottom:40px
  }
  a{
    text-decoration:none;
    color:#3498db
  }

  </style>
  </head>
  <body>
  <div class="container">
  <div class="content">
  <div class="message">Access Denied</div>
  <center><a href=""><button id="goto">Click Here to Proceed!</button></a></center>
  </div>
  </div>
  </body>
  </html>
  ` 

const SearchFunction = {
	formatSearchKeyword: function(keyword) {
		let nothing = "";
		let space = " ";
		if (!keyword) return nothing;
		return keyword.replace(/(!=)|['"=<>/\\:]/g, nothing)
			.replace(/[,，|(){}]/g, space)
			.trim()
	}

};

const DriveFixedTerms = new(class {
	default_file_fields = 'parents,id,name,mimeType,modifiedTime,createdTime,fileExtension,size';
	gd_root_type = {
		user_drive: 0,
		share_drive: 1
	};
	folder_mime_type = 'application/vnd.google-apps.folder';
})();

// Token Generation for Service Accounts
const JSONWebToken = {
	header: {
		alg: 'RS256',
		typ: 'JWT'
	},
	importKey: async function(pemKey) {
		var pemDER = this.textUtils.base64ToArrayBuffer(pemKey.split('\n').map(s => s.trim()).filter(l => l.length && !l.startsWith('---')).join(''));
		return crypto.subtle.importKey('pkcs8', pemDER, {
			name: 'RSASSA-PKCS1-v1_5',
			hash: 'SHA-256'
		}, false, ['sign']);
	},
	createSignature: async function(text, key) {
		const textBuffer = this.textUtils.stringToArrayBuffer(text);
		return crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, textBuffer)
	},
	generateGCPToken: async function(serviceAccount) {
		const iat = parseInt(Date.now() / 1000);
		var payload = {
			"iss": serviceAccount.client_email,
			"scope": "https://www.googleapis.com/auth/drive",
			"aud": "https://oauth2.googleapis.com/token",
			"exp": iat + 3600,
			"iat": iat
		};
		const encPayload = btoa(JSON.stringify(payload));
		const encHeader = btoa(JSON.stringify(this.header));
		var key = await this.importKey(serviceAccount.private_key);
		var signed = await this.createSignature(encHeader + "." + encPayload, key);
		return encHeader + "." + encPayload + "." + this.textUtils.arrayBufferToBase64(signed).replace(/\//g, '_').replace(/\+/g, '-');
	},
	textUtils: {
		base64ToArrayBuffer: function(base64) {
			var binary_string = atob(base64);
			var len = binary_string.length;
			var bytes = new Uint8Array(len);
			for (var i = 0; i < len; i++) {
				bytes[i] = binary_string.charCodeAt(i);
			}
			return bytes.buffer;
		},
		stringToArrayBuffer: function(str) {
			var len = str.length;
			var bytes = new Uint8Array(len);
			for (var i = 0; i < len; i++) {
				bytes[i] = str.charCodeAt(i);
			}
			return bytes.buffer;
		},
		arrayBufferToBase64: function(buffer) {
			let binary = '';
			let bytes = new Uint8Array(buffer);
			let len = bytes.byteLength;
			for (let i = 0; i < len; i++) {
				binary += String.fromCharCode(bytes[i]);
			}
			return btoa(binary);
		}
	}
};

// web crypto functions
async function encryptString(string, iv) {
	const key = await crypto.subtle.importKey(
		"raw",
		new TextEncoder().encode(crypto_base_key),
		"AES-CBC",
		false,
		["encrypt"]
	);
	const encodedId = new TextEncoder().encode(string);
	const encryptedData = await crypto.subtle.encrypt({
			name: "AES-CBC",
			iv: encrypt_iv
		},
		key,
		encodedId
	);
	const encryptedString = btoa(Array.from(new Uint8Array(encryptedData), (byte) => String.fromCharCode(byte)).join(""));
	return encryptedString;
}

async function decryptString(encryptedString) {
	const key = await crypto.subtle.importKey(
		"raw",
		new TextEncoder().encode(crypto_base_key),
		"AES-CBC",
		false,
		["decrypt"]
	);
	const encryptedBytes = Uint8Array.from(atob(encryptedString), (char) => char.charCodeAt(0));
	const decryptedData = await crypto.subtle.decrypt({
			name: "AES-CBC",
			iv: encrypt_iv
		},
		key,
		encryptedBytes
	);
	const decryptedString = new TextDecoder().decode(decryptedData);
	return decryptedString;
}

async function genIntegrity(data) {
	const encoder = new TextEncoder();
	const dataBuffer = encoder.encode(data);

	const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);

	// Convert the hash buffer to hexadecimal string
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

	return hashHex;
}

async function checkintegrity(text1, text2) {
	return text1 === text2;
}

function login() {
	return new Response(login_html, {
		status: 401,
		headers: {
			'Content-Type': 'text/html; charset=utf-8'
		}
	});
}


// start handlerequest
async function handleRequest(request, event) {
	const region = request.headers.get('cf-ipcountry');
	const asn_servers = request.cf.asn;
	const referer = request.headers.get("Referer");
	var user_ip = request.headers.get("CF-Connecting-IP");
	let url = new URL(request.url);
	let path = url.pathname;
	let hostname = url.hostname;
	let current_time
	if (authConfig.current_timed) {
		current_time = authConfig.current_timed;
	} else {
		current_time = Date.now();
		authConfig.current_timed = current_time;
	}
	const session_time = current_time + 86400000 * authConfig.login_days;
	let localDate = new Date (current_time).toLocaleString('en-IN', {hour12: true , timeZone: 'Asia/Kolkata'});
	if (path == '/app.js') {
		const js = await fetch('https://gitlab.com/GoogleDriveIndex/Google-Drive-Index/-/raw/dev/src/app.js', {
			method: 'GET',
		})
		const data = await js.text()
		return new Response(data, {
			status: 200,
			headers: {
				'Content-Type': 'application/javascript; charset=utf-8',
				'Access-Control-Allow-Origin': '*', // Required for CORS support to work
				'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
			}
		});
	}
	if (path == '/logout') {
		let response = new Response("", {});
		response.headers.set('Set-Cookie', `session=; HttpOnly; Secure; SameSite=Lax;`);
		response.headers.set("Refresh", "1; url=/?error=Logged Out");
		return response;
	}
	if (path == '/findpath') {
		const params = url.searchParams;
		const id = params.get('id');
		const view = params.get('view') || 'false';
		return Response.redirect(url.protocol + hostname + '/0:findpath?id=' + id + '&view=' + view, 307);
	}
	if (authConfig.enable_login) {
		const user_token = url.searchParams.get('token')
		const login_database = authConfig.login_database.toLowerCase();
		//console.log("Login Enabled")
		if (authConfig.token && user_token && user_token == authConfig.token && request.method == 'POST') {
			console.log("skipping as is token request.")
		} else if (path == '/download.aspx' && !authConfig.disable_anonymous_download) {
			console.log("Anonymous Download")
		} else if (path == '/google_callback') {
			// Extract the authorization code from the query parameters
			const code = url.searchParams.get('code')
			if (!code) {
				return new Response('Missing authorization code.', {
					status: 400
				});
			}

			// Use the authorization code to obtain access token and ID token		
			const response = await fetch('https://oauth2.googleapis.com/token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams({
					code,
					client_id: authConfig.google_client_id_for_login,
					client_secret: authConfig.google_client_secret_for_login,
					redirect_uri: authConfig.redirect_domain + '/google_callback',
					grant_type: 'authorization_code',
				}),
			});

			const data = await response.json();
			console.log(JSON.stringify(data));
			if (response.ok) {
				const idToken = data.id_token;
				const decodedIdToken = await decodeJwtToken(idToken);
				const username = decodedIdToken.email;
				let kv_key
				let user_found = false;
				// Check if user email exist in the list
				if (login_database == 'kv') {
					kv_key = await ENV.get(username);
					if (kv_key == null) {
						user_found = false;
					} else {
						user_found = true;
					}
				} else if (login_database == 'mongodb') {
					// to be implemented later
				} else { // local database
					for (i = 0; i < authConfig.users_list.length; i++) {
						if (authConfig.users_list[i].username == username) {
							user_found = true;
							console.log("User Found")
							break;
						}
					}
				}
				if (!user_found) {
					if (authConfig.enable_signup && login_database == 'kv') {
						await ENV.put(username, Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
						kv_key = await ENV.get(username);
						if (kv_key == null) {
							user_found = false;
						} else {
							user_found = true;
						}
					} else {
						let response = new Response('Invalid User! Google Login', {});
						response.headers.set('Set-Cookie', `session=; HttpOnly; Secure; SameSite=Lax;`);
						response.headers.set("Refresh", "1; url=/?error=Invalid User");
						return response;
					}
				}
				const encryptedSession = `${await encryptString(username)}|${await encryptString(kv_key)}|${await encryptString(session_time.toString())}`;
				if (authConfig.single_session) {
					await ENV.put(username + '_session', encryptedSession);
				}
				if (authConfig.ip_changed_action && user_ip) {
					await ENV.put(username + '_ip', user_ip);
				}
				if (authConfig.cache_login) {
					console.log("Cache Login Log Skipped.")
				} else {
					authConfig.cache_login = true
					await send2Telegram("Login: " + username + " from " + user_ip + " at " + localDate);
				}
				let jsonResponse = {
					ok: true,
					error: "Login Successful"
				}
				let response = new Response(JSON.stringify(jsonResponse), {
					status: 200,
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
						'Set-Cookie': `session=${encryptedSession}; path=/; HttpOnly; Secure; SameSite=Lax`,
						'Access-Control-Allow-Origin': '*', // Required for CORS support to work
						'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
						'Refresh': '0; url=/',
					}
				});
				return response;
			} else {
				let response = new Response('Invalid Token!', {});
				response.headers.set('Set-Cookie', `session=; HttpOnly; Secure; SameSite=Lax;`);
				response.headers.set("Refresh", "1; url=/?error=Invalid Token");
				return response;
			}
		} else if (authConfig.enable_login && request.method === 'POST' && path === '/login') {
			console.log("POST Request for Login")
			const formdata = await request.formData();
			const username = formdata.get('username').toLowerCase();
			const password = formdata.get('password');
			if (login_database == 'kv') {
				const kv_key = await ENV.get(username);
				if (kv_key == null) {
					var user_found = false;
				} else {
					if (kv_key == password) {
						var user_found = true;
					} else {
						var user_found = false;
					}
				}
			} else if (login_database == 'mongodb') {
				// to be implemented later
			} else { // local database
				for (i = 0; i < authConfig.users_list.length; i++) {
					if (authConfig.users_list[i].username == username && authConfig.users_list[i].password == password) {
						var user_found = true;
						break;
					}
				}
			}

			if (!user_found) {
				const jsonResponse = {
					ok: false,
				}
				let response = new Response(JSON.stringify(jsonResponse), {
					status: 200,
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
						'Access-Control-Allow-Origin': '*', // Required for CORS support to work
						'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
					}
				});
				return response;
			}
			if (user_found) {
				const encryptedSession = `${await encryptString(username)}|${await encryptString(password)}|${await encryptString(session_time.toString())}`;
				if (authConfig.single_session) {
					await ENV.put(username + '_session', encryptedSession);
				}
				if (authConfig.ip_changed_action && user_ip) {
					await ENV.put(username + '_ip', user_ip);
				}
				if (authConfig.cache_login) {
					console.log("Cache Login Log Skipped.")
				} else {
					authConfig.cache_login = true
					await send2Telegram("Login: " + username + " from " + user_ip + " at " + localDate);
				}
				let jsonResponse = {
					ok: true,
					error: "Login Successful"
				}
				let response = new Response(JSON.stringify(jsonResponse), {
					status: 200,
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
						'Set-Cookie': `session=${encryptedSession}; path=/; HttpOnly; Secure; SameSite=Lax`,
						'Access-Control-Allow-Origin': '*', // Required for CORS support to work
						'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
						'Refresh': '0; url=/',
					}
				});
				return response;
			} else {
				const jsonResponse = {
					ok: false,
				}
				let response = new Response(JSON.stringify(jsonResponse), {
					status: 200,
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
						'Access-Control-Allow-Origin': '*', // Required for CORS support to work
						'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
					}
				});
				return response;
			}
		} else if (path == '/signup' && authConfig.enable_signup && url.searchParams.get('code') == "bhadoo") {
			return new Response(signup_html, {
				status: 200,
				headers: {
					'Content-Type': 'text/html; charset=utf-8',
					'Access-Control-Allow-Origin': '*', // Required for CORS support to work
					'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
				}
			});
		} else if (path == '/forget' && request.method === 'GET' && authConfig.enable_login) {
			return new Response(forget_html, {
				status: 200,
				headers: {
					'Content-Type': 'text/html; charset=utf-8',
					'Access-Control-Allow-Origin': '*', // Required for CORS support to work
					'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
				}
			});
		} else if (path == '/change_password' && request.method === 'POST' && authConfig.enable_login) {
            console.log("POST Request for Change Password")
            const formdata = await request.formData();
            const email = formdata.get('username');
            const password = formdata.get('password');
            const new_password = formdata.get('new_password');
            if (new_password.length < 8) {
                const jsonResponse = {
                    ok: false,
                    error: "Password should be atleast 8 characters long"
                }
                return new Response(JSON.stringify(jsonResponse), {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
                        'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
                    }
                });
            }
            let kv_key;
            let user_found;
            let jsonResponse;
            if (login_database == 'kv') {
                kv_key = await ENV.get(email);
				console.log("KV Key: " + kv_key + " Password: " + password)
                if (kv_key) {
                    if (kv_key == password) {
                        await ENV.put(email, new_password);
                        user_found = true;
                    } else {
                        user_found = false;
                    }
                } else {
                    user_found = false;
                }
            }
            if (user_found) {
                jsonResponse = {
                    ok: true,
                    error: "Password Changed Successfully"
                }
            } else {
                jsonResponse = {
                    ok: false,
                    error: "Invalid Current Password"
                }
            }
            return new Response(JSON.stringify(jsonResponse), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
                    'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
                }
            });
		} else if (path == '/forget' && request.method === 'POST' && authConfig.enable_login) {
            const formdata = await request.formData();
            const username = formdata.get('username');
            let kv_key;
            if (login_database == 'kv') {
                kv_key = await ENV.get(username);
                if (kv_key == null) {
                    var user_found = false;
                } else {
                    var user_found = true;
                }
            }
            if (user_found) {
                var email1 = `<!DOCTYPE html><!DOCTYPE html> <html xmlns="http://www.w3.org/1999/xhtml" = xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-= com:office:office" style="" class=" responsejs "> <head> <title> Index Update </title> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8= " /> <meta name="viewport" content="width=device-width, initial-scale= =1" /> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,4= 00,500,700" rel="stylesheet" type="text/css" /> <style type="text/css"> #outlook a { padding: 0; } .ReadMsgBody { width: 100%; } .ExternalClass { width: 100%; } .ExternalClass * { line-height: 100%; } body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; } img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; } p { display: block; margin: 13px 0; } @media only screen and (max-width:480px) { @-ms-viewport { width: 320px; } @viewport { width: 320px; } } body { font-family: "Open Sans", Helvetica, Arial, sans-serif !importa= nt; font-size:14px; line-height:1.6; text-align:left; color:#414141; } div[data-slot="text"] { font-size:14px !important; line-height:1.6 !important; text-align:left !important; color:#414141 !important; margin-bottom: 10px !important; } div[style="clear:both"] { margin-bottom: 20px !important; } .imagecard { background: #eeeeee !important; } .imagecard-caption { font-size:12px !important; line-height:1.6 !important; text-align:center !important; color:#414141 !important; background: #eeeeee !important; padding: 10px !important; } h1, h2, h3, h4, h5, h6 { margin: 0 !important; margin-bottom: 10px !important; } .outlook-group-fix { width:100% !important; } @media only screen and (min-width:480px) { .mj-column-per-100 { width: 100% !important; } } </style> </head> <body style="background-color: rgb(255, 255, 255); cursor: auto; overflow= : visible;" class="ui-sortable"> <div data-section-wrapper="1" style="background-color:#ffffff;"> <div data-section="1" style="Margin:0px auto;border-radius:4px;= max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspac= ing="0" role="presentation" style="width:100%;border-radius:4px;"> <tbody> <tr> <td style="direction:ltr;padding:20px 0;text-alig= n:center;vertical-align:top;"> <div data-slot-container="1" class="mj-colu= mn-per-100 outlook-group-fix ui-sortable" style="font-size:13px;text-alig= n:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table background="#FFFFFF" border="0" = cellpadding="0" cellspacing="0" role="presentation" width="100%"> <tbody> <tr> <td style="background-color:#= FFFFFF;vertical-align:top;padding:20px 20px;"> <table border="0" cellpad= ding="0" cellspacing="0" role="presentation" width="100%"> <tbody> <tr> <td align="left" = style="padding:0;word-break:break-word;"> <div data-slot= ="image" style="position: relative; left: 0px; top: 0px;" class=""> <img src="https://i.imgur.com/RUuJF7F.png" alt="An image" class="fr-v= iew" style="width: 356px; height: 33.7671px;" width="356" height="33.= 7671" /> <div style="clear:both"></div> </div> <div data-slot="separator" class== "empty" style="position: relative; left: 0px; top: 0px;"> <hr /> </div> <div data-slot="text" style="font= -family:'Open Sans', Helvetica, Arial, sans-serif;font-size:14px;line-heigh= t:1.6;text-align:left;color:#414141;"> Dear Index User, <br /> Thank You for your support. <br /> <strong>Please check details below:<br /></strong> <ol> <li class="ms-hover">Your Account Password is <code>`;
                var email2 = `</code></li> </ol> Add this email in your contact list for regular updates. </div> <div data-slot="se= parator" class="empty" style="position: relative; left: 0px; top: 0px;"= > <hr /> </div> <div data-slot="text" style="posi= tion: relative; left: 0px; top: 0px;" class="">You are receiving this mandatory email service announcement to update you about important changes to your The Bay Index account.</div> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> <div data-slot-container="1" class="mj-colu= mn-per-100 outlook-group-fix ui-sortable" style="font-size:13px;text-alig= n:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cells= pacing="0" role="presentation" style="vertical-align:top;" width="1= 00%"> <tbody> <tr> <td align="left" style="padding= :20px 20px;word-break:break-word;"> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> </div> </div> <img height="1" width="1" src="" alt="" /> </body> </html>`;
                const post_email_data = JSON.stringify({
                    "email": username,
                    "body": email1 + kv_key + email2,
                    "html": email1 + kv_key + email2,
                    "subject": "Password Reset Successful",
                    "sender": "thebayindex@hashhackers.com",
                    "sender_name": "The Bay Index",
                }); 
                let res;
                for (let i = 0; i < 3; i++) {
                    res = await fetch("https://smtpapi.hashhackers.com/email/send", {
                        method: "POST",
                        headers: {
                        'content-type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "cf_cache_token",
                        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
                        },
                        body: post_email_data,
                    });
                    if (res.ok) {
                      break;
                    } else if (res.status == 403) {
                      break;
                    }
                }
                const jsonResponse = {
                    ok: true,
                }
                let response = new Response(JSON.stringify(jsonResponse), {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
                        'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
                    }
                });
                return response;
            }
            const jsonResponse = {
                ok: false,
            }
            let response = new Response(JSON.stringify(jsonResponse), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
                    'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
                }
            });
            return response;
		} else if (authConfig.enable_signup && request.method === 'POST' && path === '/signup_api') {
			if (login_database == 'kv') {
				const formdata = await request.formData();
				const username = formdata.get('username');
				const password = formdata.get('password');
				if (username == null || password == null) {
					const jsonResponse = {
						ok: true,
						error: "Username or Password is null"
					}
					let response = new Response(JSON.stringify(jsonResponse), {
						status: 200,
						headers: {
							'Content-Type': 'application/json; charset=utf-8',
							'Set-Cookie': `session=; path=/; HttpOnly; Secure; SameSite=Lax`,
							'Access-Control-Allow-Origin': '*', // Required for CORS support to work
							'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
						}
					});
					return response;
				} else if (username.length > 8 && password.length > 8) {
					const checkKey = await ENV.get(username);
					let jsonResponse;
					if (checkKey != null) {
						jsonResponse = {
							ok: false,
							error: "User Already Exists"
						}
					} else {
						await ENV.put(username, password);
						jsonResponse = {
							ok: true,
							error: "User Created"
						}
						var email1 = `<!DOCTYPE html><!DOCTYPE html> <html xmlns="http://www.w3.org/1999/xhtml" = xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-= com:office:office" style="" class=" responsejs "> <head> <title> Index Update </title> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8= " /> <meta name="viewport" content="width=device-width, initial-scale= =1" /> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,4= 00,500,700" rel="stylesheet" type="text/css" /> <style type="text/css"> #outlook a { padding: 0; } .ReadMsgBody { width: 100%; } .ExternalClass { width: 100%; } .ExternalClass * { line-height: 100%; } body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; } img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; } p { display: block; margin: 13px 0; } @media only screen and (max-width:480px) { @-ms-viewport { width: 320px; } @viewport { width: 320px; } } body { font-family: "Open Sans", Helvetica, Arial, sans-serif !importa= nt; font-size:14px; line-height:1.6; text-align:left; color:#414141; } div[data-slot="text"] { font-size:14px !important; line-height:1.6 !important; text-align:left !important; color:#414141 !important; margin-bottom: 10px !important; } div[style="clear:both"] { margin-bottom: 20px !important; } .imagecard { background: #eeeeee !important; } .imagecard-caption { font-size:12px !important; line-height:1.6 !important; text-align:center !important; color:#414141 !important; background: #eeeeee !important; padding: 10px !important; } h1, h2, h3, h4, h5, h6 { margin: 0 !important; margin-bottom: 10px !important; } .outlook-group-fix { width:100% !important; } @media only screen and (min-width:480px) { .mj-column-per-100 { width: 100% !important; } } </style> </head> <body style="background-color: rgb(255, 255, 255); cursor: auto; overflow= : visible;" class="ui-sortable"> <div data-section-wrapper="1" style="background-color:#ffffff;"> <div data-section="1" style="Margin:0px auto;border-radius:4px;= max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspac= ing="0" role="presentation" style="width:100%;border-radius:4px;"> <tbody> <tr> <td style="direction:ltr;padding:20px 0;text-alig= n:center;vertical-align:top;"> <div data-slot-container="1" class="mj-colu= mn-per-100 outlook-group-fix ui-sortable" style="font-size:13px;text-alig= n:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table background="#FFFFFF" border="0" = cellpadding="0" cellspacing="0" role="presentation" width="100%"> <tbody> <tr> <td style="background-color:#= FFFFFF;vertical-align:top;padding:20px 20px;"> <table border="0" cellpad= ding="0" cellspacing="0" role="presentation" width="100%"> <tbody> <tr> <td align="left" = style="padding:0;word-break:break-word;"> <div data-slot= ="image" style="position: relative; left: 0px; top: 0px;" class=""> <img src="https://i.imgur.com/RUuJF7F.png" alt="An image" class="fr-v= iew" style="width: 356px; height: 33.7671px;" width="356" height="33.= 7671" /> <div style="clear:both"></div> </div> <div data-slot="separator" class== "empty" style="position: relative; left: 0px; top: 0px;"> <hr /> </div> <div data-slot="text" style="font= -family:'Open Sans', Helvetica, Arial, sans-serif;font-size:14px;line-heigh= t:1.6;text-align:left;color:#414141;"> Dear Index User, <br /> Thank You for your support. <br /> <strong>Please complete the following steps:<br /></strong> <ol> <li class="ms-hover">Join this <a href="https://telegram.dog/+IZjGwoGVYOo3MmJh">Telegram Channel</a>.</li> <li class="ms-hover">Do Not Share this with Anyone.</li> <li class="ms-hover">Please wait, as we'll accept your request in a few days.</li> <li class="ms-hover">Your Account Password is <code>`;
						var email2 = `</code></li> </ol> Add this email in your contact list for regular updates. </div> <div data-slot="se= parator" class="empty" style="position: relative; left: 0px; top: 0px;"= > <hr /> </div> <div data-slot="text" style="posi= tion: relative; left: 0px; top: 0px;" class="">You are receiving this mandatory email service announcement to update you about important changes to your The Bay Index account.</div> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> <div data-slot-container="1" class="mj-colu= mn-per-100 outlook-group-fix ui-sortable" style="font-size:13px;text-alig= n:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cells= pacing="0" role="presentation" style="vertical-align:top;" width="1= 00%"> <tbody> <tr> <td align="left" style="padding= :20px 20px;word-break:break-word;"> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> </div> </div> <img height="1" width="1" src="" alt="" /> </body> </html>`;
						const post_email_data = JSON.stringify({
							"email": username,
							"body": email1 + password + email2,
							"html": email1 + password + email2,
							"subject": "The Bay Index - Invite",
							"sender": "thebayindex@hashhackers.com",
							"sender_name": "The Bay Index",
						}); 
						let res;
						for (let i = 0; i < 3; i++) {
							res = await fetch("https://smtpapi.hashhackers.com/email/send", {
								method: "POST",
								headers: {
								'content-type': 'application/json;charset=UTF-8',
								"Access-Control-Allow-Origin": "*",
								"Access-Control-Allow-Headers": "cf_cache_token",
								"Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
								},
								body: post_email_data,
							});
							if (res.ok) {
							  break;
							} else if (res.status == 403) {
							  break;
							}
						}
					}
					let response = new Response(JSON.stringify(jsonResponse), {
						status: 200,
						headers: {
							'Content-Type': 'application/json; charset=utf-8',
							'Set-Cookie': `session=; path=/; HttpOnly; Secure; SameSite=Lax`,
							'Access-Control-Allow-Origin': '*', // Required for CORS support to work
							'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
						}
					});
					return response;
				} else {
					const jsonResponse = {
						ok: false,
						error: "Username or Password length is less than 8 characters"
					}
					let response = new Response(JSON.stringify(jsonResponse), {
						status: 200,
						headers: {
							'Content-Type': 'application/json; charset=utf-8',
							'Set-Cookie': `session=; path=/; HttpOnly; Secure; SameSite=Lax`,
							'Access-Control-Allow-Origin': '*', // Required for CORS support to work
							'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
						}
					});
					return response;
				}
			} else if (login_database == 'mongodb') {
				// to be implemented later
			} else {
				return new Response("Signup is not supported with local database", {
					status: 200,
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
						'Access-Control-Allow-Origin': '*', // Required for CORS support to work
						'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
					}
				});
			}
		} else if (request.method === 'GET') {
			//console.log("GET Request")
			const cookie = await request.headers.get('cookie');
			if (cookie && cookie.includes('session=')) {
				const session = cookie.split('session=').pop().split(';').shift().trim();
				if (session == 'null' || session == '' || session == null) {
					return login()
				}
				const username = await decryptString(session.split('|')[0]);
				let kv_session
				if (authConfig.single_session) {
					kv_session = await ENV.get(username + '_session');
					console.log("KV Session: " + kv_session + " | Session: " + session)
					if (kv_session != session) {
						let response = new Response('User Logged in Someplace Else!', {
							headers: {
								'Set-Cookie': `session=; HttpOnly; Secure; SameSite=Lax;`,
							}
						});
						response.headers.set("Refresh", "1; url=/?error=User Logged in Someplace Else!");
						return response;
					}
				}
				if (authConfig.ip_changed_action && user_ip) {
					const kv_ip = await ENV.get(username + '_ip');
					if (kv_ip != user_ip) {
						let response = new Response('IP Changed! Login Required', {
							headers: {
								'Set-Cookie': `session=; HttpOnly; Secure; SameSite=Lax;`,
							}
						});
						response.headers.set("Refresh", "1; url=/?error=IP Changed! Login Required");
						return response;
					}
				}
				const session_time = await decryptString(session.split('|')[2]);
				console.log("User: " + username + " | Session Time: " + session_time)
				if (Number(session_time) < current_time) {
					let response = new Response('Session Expired!', {
						headers: {
							'Set-Cookie': `session=; HttpOnly; Secure; SameSite=Lax;`,
						}
					});
					response.headers.set("Refresh", "1; url=/?error=Session Expired!");
					return response;
				}
				if (login_database == 'kv') {
					const kv_key = await ENV.get(username);
					if (kv_key == null) {
						var user_found = false;
					} else {
						if (kv_key) {
							var user_found = true;
						} else {
							var user_found = false;
						}
					}
				} else if (login_database == 'mongodb') {
					// to be implemented later
				} else { // local database
					for (i = 0; i < authConfig.users_list.length; i++) {
						if (authConfig.users_list[i].username == username) {
							var user_found = true;
							break;
						}
					}
				}
				if (user_found) {
					console.log("User Found")
				} else {
					let response = new Response('Invalid User! Something Wrong', {});
					response.headers.set('Set-Cookie', `session=; HttpOnly; Secure; SameSite=Lax;`);
					response.headers.set("Refresh", "1; url=/?error=Invalid User");
					return response;
				}
			} else {
				return login()
			}
		}
	}
    if (path == '/profile' && request.method === 'GET' && authConfig.enable_login) {
        const cookie = request.headers.get('cookie');
        const session = cookie.split('session=').pop().split(';').shift().trim();
        const email = await decryptString(session.split('|')[0]);
		const daily_downloads = await ENV.get(email + '_downloads');
		const dailyDownloadsValue = daily_downloads ? daily_downloads : 0;
		const total_downloads = await ENV.get(email + '_total_downloads');
		const totalDownloadsValue = total_downloads ? total_downloads : 0;
        return new Response(profile_html(email, user_ip, dailyDownloadsValue, totalDownloadsValue), {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'Access-Control-Allow-Origin': '*', // Required for CORS support to work
                'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
                'Set-Cookie': `user_email=${email}; path=/profile; Secure; SameSite=Lax;`
            }
        });
    }
	if (path == '/find' && request.method === 'GET') {
		return new Response(find_files, {
			status: 200,
			headers: {
				'Content-Type': 'text/html; charset=utf-8',
				'Access-Control-Allow-Origin': '*', // Required for CORS support to work
				'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
			}
		});
	}
	if (request.method === "POST" && path == "/copy") {
		try {
			let form = await request.formData();
			let time = form.get('time')
			if (time > Math.floor(Date.now() / 1000) + 10 * 60) {
				return new Response('{"error":"Invalid Time"}', {
					status: 404,
					headers: {
						"content-type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Cache-Control": "max-age=0",
					}
				});
			}
			let user_drive = form.get('root_id') || "null";
			if (user_drive == "null") {
				return new Response('{"error":"404"}', {
					status: 200,
					headers: {
						"content-type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Cache-Control": "max-age=0",
					}
				});
			}
			let public_drive_id = await decryptString(form.get('id')) || "null";
			let user_folder_id = form.get('root_id') || "null";
			let resourcekey = form.get('resourcekey') || "null";
			let file = await copyItemById(public_drive_id, resourcekey, user_folder_id, "service");
			const file_res = file;
			if (file_res.error && file_res.error.errors[0].reason == "userRateLimitExceeded") {
				file = await copyItemById(public_drive_id, resourcekey, user_folder_id, "fallback");
			}
			return new Response(JSON.stringify(file), {
				status: 200,
				headers: {
					"content-type": "application/json",
					"Access-Control-Allow-Origin": "*",
					"Cache-Control": "max-age=0",
				}
			});
		} catch (e) {
			return new Response(e, {
				status: 200,
				headers: {
					"content-type": "application/json",
					"Access-Control-Allow-Origin": "*",
					"Cache-Control": "max-age=0",
				}
			});
		}
	}
	const cookie = request.headers.get('cookie');
	const session = cookie ? cookie.split('session=').pop().split(';').shift().trim() : ''
	const user_email = await session.split('|')[0];
	if (gds.length === 0) {
		for (let i = 0; i < authConfig.roots.length; i++) {
			const gd = new googleDrive(authConfig, i);
			await gd.init();
			gds.push(gd)
		}
		let tasks = [];
		gds.forEach(gd => {
			tasks.push(gd.initRootType());
		});
		for (let task of tasks) {
			await task;
		}
	}

	let gd;

	function redirectToIndexPage() {
		return new Response('', {
			status: 307,
			headers: {
				'Location': `${url.origin}/`
			}
		});
	}

	if (region && blocked_region.includes(region.toUpperCase())) {
		return new Response(asn_blocked, {
			status: 403,
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		})
	} else if (asn_servers && blocked_asn.includes(asn_servers)) {
		return new Response(asn_blocked, {
			headers: {
				'content-type': 'text/html;charset=UTF-8'
			},
			status: 401
		});
	} else if (path == '/') {
		return new Response(homepage, {
			status: 200,
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		})
	} else if (path == '/fallback') {
		return new Response(html(0, {
			is_search_page: false,
			root_type: 1
		}), {
			status: 200,
			headers: {
				'Content-Type': 'text/html; charset=utf-8'
			}
		});
	} else if (path == '/download.aspx') {
		console.log("Download.aspx started");
		const file = await decryptString(url.searchParams.get('file'));
		console.log(file)
		const expiry = await decryptString(url.searchParams.get('expiry'));
		let integrity_result = false;
		if (authConfig['enable_ip_lock'] && user_ip) {
			const integrity = await genIntegrity(`${file}|${expiry}|${user_ip}`);
			const mac = url.searchParams.get('mac');
			integrity_result = await checkintegrity(mac, integrity);
		} else {
			const integrity = await genIntegrity(`${file}|${expiry}`);
			const mac = url.searchParams.get('mac');
			integrity_result = await checkintegrity(mac, integrity);
		}
		if (integrity_result) {
			let range = request.headers.get('Range');
			const inline = 'true' === url.searchParams.get('inline');
			console.log(file, range)
			return download(file, range, inline);
		} else {
			return new Response('Invalid Request!', {
				status: 401,
				headers: {
					"content-type": "text/html;charset=UTF-8",
				},
			})
		}
	}

	if (authConfig['direct_link_protection']) {
		if (referer == null) {
			return new Response(directlink, {
				headers: {
					'content-type': 'text/html;charset=UTF-8'
				},
				status: 401
			});
		} else if (referer.includes(hostname)) {
			console.log("Refer Detected");
		} else {
			return new Response(directlink, {
				headers: {
					'content-type': 'text/html;charset=UTF-8'
				},
				status: 401
			});
		}
	}


	const command_reg = /^\/(?<num>\d+):(?<command>[a-zA-Z0-9]+)(\/.*)?$/g;
	const match = command_reg.exec(path);
	if (match) {
		const num = match.groups.num;
		const order = Number(num);
		if (order >= 0 && order < gds.length) {
			gd = gds[order];
		} else {
			return redirectToIndexPage()
		}
		//for (const r = gd.basicAuthResponse(request); r;) return r;
		const command = match.groups.command;
		if (command === 'search') {
			if (request.method === 'POST') {
				return handleSearch(request, gd, user_ip, user_email);
			} else {
				const params = url.searchParams;
				return new Response(html(gd.order, {
					q: params.get("q").replace(/'/g, "").replace(/"/g, "") || '',
					is_search_page: true,
					root_type: gd.root_type
				}), {
					status: 200,
					headers: {
						'Content-Type': 'text/html; charset=utf-8'
					}
				});
			}
		} else if (command === 'id2path' && request.method === 'POST') {
			return handleId2Path(request, gd)
		} else if (command === 'fallback' && request.method === 'POST') {
			const formdata = await request.json();
			const id = await decryptString(formdata.id);
			const type = formdata.type;
			if (type && type == 'folder') {
				const page_token = formdata.page_token || null;
				const page_index = formdata.page_index || 0;
				const details = await gd._list_gdrive_files(id, page_token, page_index);
				for (const file of details.data.files) {
					if (file.mimeType != 'application/vnd.google-apps.folder') {
						file.link = await generateLink(file.id, user_ip, user_email);
					}
					file.driveId = await encryptString(file.driveId);
					file.id = await encryptString(file.id);
				}
				const encryptedDetails = details;
				return new Response(JSON.stringify(encryptedDetails), {});
			}
			const details = await gd.findItemById(id)
			details.link = await generateLink(details.id, user_ip, user_email);
			details.id = formdata.id;
			details.parents ? details.parents[0] = null : console.log("skip");
			return new Response(JSON.stringify(details), {});
		} else if (command === 'findpath' && request.method === 'GET') {
			return findId2Path(gd, url)
		}
	}



	const common_reg = /^\/\d+:\/.*$/g;
	try {
		if (!path.match(common_reg)) {
			return redirectToIndexPage();
		}
		let split = path.split("/");
		let order = Number(split[1].slice(0, -1));
		if (order >= 0 && order < gds.length) {
			gd = gds[order];
		} else {
			return redirectToIndexPage()
		}
	} catch (e) {
		return redirectToIndexPage()
	}

	//path = path.replace(gd.url_path_prefix, '') || '/';
	if (request.method == 'POST') {
		return apiRequest(request, gd, user_ip, user_email);
	}

	let action = url.searchParams.get('a');
	if (path.endsWith('/') || action) {
		return new Response(html(gd.order, {
			root_type: gd.root_type
		}), {
			status: 200,
			headers: {
				'Content-Type': 'text/html; charset=utf-8'
			}
		});
	} else {
		new_path = path.replace(gd.url_path_prefix, '') || '/';
		let file = await gd.get_single_file(new_path);
		if (file) {
			if (new_path.split('/').pop().toLowerCase() == ".password" || file.name.toLowerCase() == ".password") {
				return redirectToIndexPage()
			}
			if (uiConfig.second_domain_for_dl) {
				return Response.redirect(url + "?a=view", 302);
			}
			let range = request.headers.get('Range');
			const inline = 'true' === url.searchParams.get('inline');
			if (gd.root.protect_file_link && authConfig.enable_login) return login();
			return download(file.id, range, inline);
		} else {
			return redirectToIndexPage()
		}
	}
}
// end handlerequest

function enQuery(data) {
	const ret = [];
	for (let d in data) {
		ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
	}
	return ret.join('&');
}

async function getAccessToken(type = "service") {
	if (type == "service") {
		if (authConfig.accessToken && authConfig.expires > Date.now()) {
			console.log("Using cached token");
			return [authConfig.accessToken, authConfig.expires];
		}
		if (authConfig.use_kv_storage) {
			var refresh_token_expiry = await ENV.get("expiry");
			if (refresh_token_expiry == void 0 || refresh_token_expiry <= Date.now() || refresh_token_expiry == "undefined") {
				console.log("Generating New Token");
				const obj = await fetchAccessToken(type);
				console.log("Refresh Token: " + obj.access_token);
				if (obj.access_token != void 0) {
					authConfig.accessToken = obj.access_token;
					authConfig.expires = Date.now() + 1800 * 1e3;
				}
				await ENV.put("refresh_token", authConfig.accessToken);
				await ENV.put("expiry", authConfig.expires);
				return [authConfig.accessToken, authConfig.expires];
			} else {
				console.log("Using old Token");
				authConfig.accessToken = await ENV.get("refresh_token");
				return [authConfig.accessToken, refresh_token_expiry];
			}
		} else {
			const obj = await fetchAccessToken(type);
			if (obj.access_token != void 0) {
				authConfig.accessToken = obj.access_token;
				authConfig.expires = Date.now() + 1800 * 1e3;
			}
			return [authConfig.accessToken, authConfig.expires];
		}
	} else {
		if (authConfig.accessToken2 && authConfig.expires2 > Date.now()) {
			console.log("Using cached token2");
			return [authConfig.accessToken2, authConfig.expires2];
		}
		if (authConfig.use_kv_storage) {
			var refresh_token_expiry = await ENV.get("expiry2");
			if (refresh_token_expiry == void 0 || refresh_token_expiry <= Date.now() || refresh_token_expiry == "undefined") {
				console.log("Generating New Token2");
				const obj = await fetchAccessToken(type);
				console.log("Refresh Token: " + obj.access_token);
				if (obj.access_token != void 0) {
					authConfig.accessToken2 = obj.access_token;
					authConfig.expires2 = Date.now() + 1800 * 1e3;
				}
				await ENV.put("refresh_token2", authConfig.accessToken2);
				await ENV.put("expiry2", authConfig.expires2);
				return [authConfig.accessToken2, authConfig.expires2];
			} else {
				console.log("Using old Token2");
				authConfig.accessToken2 = await ENV.get("refresh_token2");
				return [authConfig.accessToken2, refresh_token_expiry];
			}
		} else {
			const obj = await fetchAccessToken(type);
			if (obj.access_token != void 0) {
				authConfig.accessToken = obj.access_token;
				authConfig.expires = Date.now() + 1800 * 1e3;
			}
			return [authConfig.accessToken, authConfig.expires];
		}
	}
}
async function fetchAccessToken(type = "service") {
	const url = "https://www.googleapis.com/oauth2/v4/token";
	const headers = {
		"Content-Type": "application/x-www-form-urlencoded"
	};
	var post_data;
	if (authConfig.service_account && type == "service") {
		let jwttoken
		if (authConfig.external_service_account) {
			var fetch_sa = await fetch("https://sa-service-gateway.hashhackers.com/n5klbmhu3fkkfz3rgt2xsat5dpbavu7d6f765drsrzl5dqgmunpjbghol6vjzfsh9r547njfi4lhof97.json?token=bhadoocloudwebservices", {
				method: "GET"
			});
			var sa = await fetch_sa.text();
			jwttoken = await JSONWebToken.generateGCPToken(JSON.parse(sa));
		} else {
			jwttoken = await JSONWebToken.generateGCPToken(authConfig.service_account_json);
		}
		post_data = {
			grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
			assertion: jwttoken
		};
	} else if (authConfig.service_account && type == "fallback") {
		var fetch_user = await fetch("https://sa-service-gateway.hashhackers.com/refresh_token.json?token=bhadoocloudwebservices", {
			method: "GET"
		});
		var refresh_token = await fetch_user.text();
		post_data = {
			client_id: authConfig.client_id,
			client_secret: authConfig.client_secret,
			refresh_token: refresh_token,
			grant_type: "refresh_token"
		};
	} else {
		post_data = {
			client_id: authConfig.client_id,
			client_secret: authConfig.client_secret,
			refresh_token: authConfig.refresh_token,
			grant_type: "refresh_token"
		};
	}
	let requestOption = {
		"method": "POST",
		"headers": headers,
		"body": enQuery(post_data)
	};
	let response;
	for (let i = 0; i < 3; i++) {
		response = await fetch(url, requestOption);
		if (response.ok) {
			break;
		}
		await sleep(800 * (i + 1));
	}
	return await response.json();
}

async function copyItemById(id, resourcekey, user_folder_id, type = "service", headers = {}) {
	let url = `https://www.googleapis.com/drive/v3/files/${id}/copy?fields=id,name,mimeType&supportsAllDrives=true`;
	const accessToken = await getAccessToken(type);
	headers["authorization"] = "Bearer " + accessToken;
	headers["Accept"] = "application/json";
	headers["Content-Type"] = "application/json";
	headers["X-Goog-Drive-Resource-Keys"] = id + "/" + resourcekey;
	let json = {
		parents: [user_folder_id]
	}
	let res
	for (let i = 0; i < 3; i++) {
		res = await fetch(url, {
			"method": "POST",
			"headers": headers,
			"body": JSON.stringify(json)
		});
		if (res.ok) {
			break;
		}
		await sleep(100 * (i + 1));
	}
	const data = await res.json();
	console.log(data);
	return data;
}

async function sleep(ms) {
	return new Promise(function(resolve, reject) {
		let i = 0;
		setTimeout(function() {
			console.log('sleep' + ms);
			i++;
			if (i >= 2) reject(new Error('i>=2'));
			else resolve(i);
		}, ms);
	})
}
async function generateLink(file_id, user_ip, user_email, iv) {
	const encrypted_id = await encryptString(file_id, iv);
	const expiry = Date.now() + 1000 * 60 * 60 * 24 * authConfig.file_link_expiry;
	const encrypted_expiry = await encryptString(expiry.toString(), iv);
	let url
	if (authConfig['enable_ip_lock'] && user_ip) {
		const encrypted_ip = await encryptString(user_ip, iv);
		const integrity = await genIntegrity(`${file_id}|${expiry}|${user_ip}`);
		url = `/download.aspx?file=${encodeURIComponent(encrypted_id)}&expiry=${encodeURIComponent(encrypted_expiry)}&ip=${encodeURIComponent(encrypted_ip)}&mac=${encodeURIComponent(integrity)}&user=${encodeURIComponent(user_email)}`;
	} else {
		const integrity = await genIntegrity(`${file_id}|${expiry}`);
		url = `/download.aspx?file=${encodeURIComponent(encrypted_id)}&expiry=${encodeURIComponent(encrypted_expiry)}&mac=${encodeURIComponent(integrity)}&user=${encodeURIComponent(user_email)}`;
	}
	return url;
}

async function apiRequest(request, gd, user_ip, user_email) {
	let url = new URL(request.url);
	let path = url.pathname;
	path = path.replace(gd.url_path_prefix, '') || '/';
	let option = {
		status: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json;charset=UTF-8',
		}
	}

	if (path.endsWith("/")) {
		let requestData = await request.json();
		let list_result = await gd.request_list_of_files(
			path,
			requestData.page_token || null,
			Number(requestData.page_index) || 0
		);

		if (authConfig['enable_password_file_verify']) {
			let password = await gd.password(path);
			// console.log("dir password", password);
			if (password && password.replace("\n", "") !== requestData.password) {
				// ask for password input
				let html = `{"error": {"code": 401,"message": "password error."}}`;
				return new Response(html, option);
			}
		}

		list_result.data.files = await Promise.all(list_result.data.files.map(async (file) => {
			const {
				driveId,
				id,
				mimeType,
				...fileWithoutId
			} = file;

			const encryptedId = await encryptString(id);
			const encryptedDriveId = await encryptString(driveId);

			let link = null;
			if (mimeType !== 'application/vnd.google-apps.folder' && authConfig.time_based_downloads) {
				link = await generateLink(id, user_ip, user_email);
			}

			return {
				...fileWithoutId,
				id: encryptedId,
				driveId: encryptedDriveId,
				mimeType: mimeType,
				link: link,
			};
		}));
		const encryptedFiles = list_result;
		const data = JSON.stringify(encryptedFiles)
		return new Response(data, {
			status: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json;charset=UTF-8'

			}
		});
	} else {
		let file_json = await gd.get_single_file(path);
		if (!file_json) {
			return new Response('{"error": "file not found"}', {
				status: 404,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json;charset=UTF-8'

				}
			});
		}
		const {
			driveId,
			id,
			...fileWithoutId
		} = file_json;

		const encryptedId = await encryptString(id);
		const encryptedDriveId = await encryptString(driveId);
		let link = null;
		if (authConfig.time_based_downloads) {
			link = await generateLink(id, user_ip, user_email);
		}
		const encryptedFile = {
			...fileWithoutId,
			id: encryptedId,
			driveId: encryptedDriveId,
			link: link,
		};

		const encryptedFiles = encryptedFile;

		const data = JSON.stringify(encryptedFiles)
		return new Response(data, {
			status: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json;charset=UTF-8'

			}
		});
	}
}

// deal with search
async function handleSearch(request, gd, user_ip = '', user_email = '') {
	const option = {
		status: 200,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	};
	const requestData = await request.json();
	const q = requestData.q || '';
	const pageToken = requestData.page_token || null;
	const pageIndex = Number(requestData.page_index) || 0;
	if (q == '') return new Response(JSON.stringify({
		"nextPageToken": null,
		"curPageIndex": 0,
		"data": {
			"files": []
		}
	}), option);
	const searchResult = await gd.searchFilesinDrive(q, pageToken, pageIndex, gd.order);
	searchResult.data.files = await Promise.all(searchResult.data.files.map(async (file) => {
		const {
			driveId,
			id,
			...fileWithoutId
		} = file;

		const encryptedId = await encryptString(id);
		const encryptedDriveId = await encryptString(driveId);
		const link = await generateLink(id, user_ip, user_email);
		return {
			...fileWithoutId,
			id: encryptedId,
			driveId: encryptedDriveId,
			link: link,
		};
	}));
	return new Response(JSON.stringify(searchResult), option);
}

async function handleId2Path(request, gd) {
	let url = new URL(request.url);
	const option = {
		status: 200,
		headers: {
			"content-type": "application/json",
			"Access-Control-Allow-Origin": authConfig.cors_domain,
			"Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
		}
	};
	try {
		const data = await request.json();
		const id = await decryptString(data.id);
		let [path, prefix] = await gd.findPathById(id);
		let jsonpath = '{"path": "/' + prefix + ':' + path + '"}'
		console.log(jsonpath)
		return new Response(jsonpath || '', option);
	} catch (error) {
		console.log(error)
		return new Response('{"message":"Request Failed or Path Not Found","error":"' + error + '"}', {
			status: 500,
			headers: {
				"content-type": "application/json",
				"Access-Control-Allow-Origin": authConfig.cors_domain,
				"Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
			}
		});
	}
}

async function findId2Path(gd, url) {
	try {
		let [path, prefix] = await gd.findPathById(url.searchParams.get('id'));
		console.log(path, prefix)
		if (!path) {
			return new Response("Invalid URL");
		} else if (url.searchParams.get('view') && url.searchParams.get('view') == 'true') {
			return Response.redirect(url.protocol + "//" + url.hostname + "/" + prefix + ":" + path + "?a=view" || '', 302);
		} else {
			return Response.redirect(url.protocol + "//" + url.hostname + "/" + prefix + ":" + path || '', 302);
		}
	} catch (error) {
		const encrypted_id = await encryptString(url.searchParams.get('id'), encrypt_iv)
		return Response.redirect(url.protocol + "//" + url.hostname + "/fallback?id=" + encrypted_id || '', 302);
	}
}

// start of class googleDrive
class googleDrive {
	constructor(authConfig, order) {
		this.order = order;
		this.root = authConfig.roots[order];
		this.root.protect_file_link = this.root.protect_file_link || false;
		this.url_path_prefix = `/${order}:`;
		this.authConfig = authConfig;
		this.paths = [];
		this.files = [];
		this.passwords = [];
		this.paths["/"] = this.root['id'];
	}
	async init() {
		if (authConfig.user_drive_real_root_id) return;
		const root_obj = await (gds[0] || this).findItemById('root');
		if (root_obj && root_obj.id) {
			authConfig.user_drive_real_root_id = root_obj.id
		}
	}

	async initRootType() {
		const root_id = this.root['id'];
		const types = DriveFixedTerms.gd_root_type;
		if (root_id === 'root' || root_id === authConfig.user_drive_real_root_id) {
			this.root_type = types.user_drive;
		} else {
			this.root_type = types.share_drive;
		}
	}


	async get_single_file(path) {
		if (typeof this.files[path] == 'undefined') {
			this.files[path] = await this.get_single_file_api(path);
		}
		return this.files[path] || false;
	}

	async get_single_file_api(path) {
		let arr = path.split('/');
		let name = arr.pop();
		name = decodeURIComponent(name).replace(/\'/g, "\\'");
		let dir = arr.join('/') + '/';
		let parent = await this.findPathId(dir);
		let url = 'https://www.googleapis.com/drive/v3/files';
		let params = {
			'includeItemsFromAllDrives': true,
			'supportsAllDrives': true
		};
		params.q = `'${parent}' in parents and name = '${name}' and trashed = false and mimeType != 'application/vnd.google-apps.shortcut'`;
		params.fields = "files(id, name, mimeType, size ,createdTime, modifiedTime, iconLink, thumbnailLink, driveId, fileExtension)";
		url += '?' + enQuery(params);
		let requestOption = await this.requestOptions();
		let response;
		for (let i = 0; i < 3; i++) {
			response = await fetch(url, requestOption);
			if (response.ok) {
				break;
			}
			await sleep(800 * (i + 1));
		}
		let obj = await response.json();
		// console.log(obj);
		return obj.files[0] || false;
	}

	async request_list_of_files(path, page_token = null, page_index = 0) {
		if (this.path_children_cache == undefined) {
			// { <path> :[ {nextPageToken:'',data:{}}, {nextPageToken:'',data:{}} ...], ...}
			this.path_children_cache = {};
		}

		if (this.path_children_cache[path] &&
			this.path_children_cache[path][page_index] &&
			this.path_children_cache[path][page_index].data
		) {
			let child_obj = this.path_children_cache[path][page_index];
			return {
				nextPageToken: child_obj.nextPageToken || null,
				curPageIndex: page_index,
				data: child_obj.data
			};
		}

		let id = await this.findPathId(path);
		let result = await this._list_gdrive_files(id, page_token, page_index);
		let data = result.data;
		if (result.nextPageToken && data.files) {
			if (!Array.isArray(this.path_children_cache[path])) {
				this.path_children_cache[path] = []
			}
			this.path_children_cache[path][Number(result.curPageIndex)] = {
				nextPageToken: result.nextPageToken,
				data: data
			};
		}

		return result
	}

	// listing files usign google drive api
	async _list_gdrive_files(parent, page_token = null, page_index = 0) {

		if (parent == undefined) {
			return null;
		}
		let obj;
		let params = {
			'includeItemsFromAllDrives': true,
			'supportsAllDrives': true
		};
		params.q = `'${parent}' in parents and trashed = false AND name !='.password' and mimeType != 'application/vnd.google-apps.shortcut' and mimeType != 'application/vnd.google-apps.document' and mimeType != 'application/vnd.google-apps.spreadsheet' and mimeType != 'application/vnd.google-apps.form' and mimeType != 'application/vnd.google-apps.site'`;
		params.orderBy = 'folder, name, modifiedTime desc';
		params.fields = "nextPageToken, files(id, name, mimeType, size, modifiedTime, driveId, kind, fileExtension)";
		params.pageSize = this.authConfig.files_list_page_size;

		if (page_token) {
			params.pageToken = page_token;
		}
		let url = 'https://www.googleapis.com/drive/v3/files';
		url += '?' + enQuery(params);
		let requestOption = await this.requestOptions();
		let response;
		for (let i = 0; i < 3; i++) {
			response = await fetch(url, requestOption);
			if (response.ok) {
				break;
			}
			await sleep(800 * (i + 1));
		}
		obj = await response.json();

		return {
			nextPageToken: obj.nextPageToken || null,
			driveId: await encryptString(parent, encrypt_iv),
			curPageIndex: page_index,
			data: obj
		};
	}

	// get file content by path
	async password(path) {
		if (this.passwords[path] !== undefined) {
			return this.passwords[path];
		}

		let file = await this.get_single_file(path + '.password');
		console.log("checking password file: " + file)
		if (file) {
			let url = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
			let requestOption = await this.requestOptions();
			let response = await this.fetch200(url, requestOption);
			this.passwords[path] = await response.text();
		} else {
			this.passwords[path] = false;
		}
		return this.passwords[path] || false;
	}

	async searchFilesinDrive(origin_keyword, page_token = null, page_index = 0, order) {
		const types = DriveFixedTerms.gd_root_type;
		const is_user_drive = this.root_type === types.user_drive;
		const is_share_drive = this.root_type === types.share_drive;
		const empty_result = {
			nextPageToken: null,
			curPageIndex: page_index,
			data: null
		};

		if (!is_user_drive && !is_share_drive) {
			return empty_result;
		}
		let keyword = SearchFunction.formatSearchKeyword(origin_keyword);
		if (!keyword) {
			return empty_result;
		}
		let words = keyword.split(/\s+/);
		let name_search_str = `name contains '${words.join("' AND name contains '")}'`;
		let params = {};
		if (is_user_drive) {
			if (authConfig.search_all_drives) {
				params.corpora = 'allDrives';
				params.includeItemsFromAllDrives = true;
				params.supportsAllDrives = true;
			} else {
				params.corpora = 'user';
			}
		}
		if (is_share_drive) {
			if (authConfig.search_all_drives && order == 0) {
				params.corpora = 'allDrives';
			} else {
				params.corpora = 'drive';
				params.driveId = this.root.id;
			}
			params.includeItemsFromAllDrives = true;
			params.supportsAllDrives = true;
		}
		if (page_token) {
			params.pageToken = page_token;
		}
		params.q = `trashed = false AND mimeType != 'application/vnd.google-apps.shortcut' and mimeType != 'application/vnd.google-apps.document' and mimeType != 'application/vnd.google-apps.spreadsheet' and mimeType != 'application/vnd.google-apps.form' and mimeType != 'application/vnd.google-apps.site' AND name !='.password' AND (${name_search_str})`;
		params.fields = "nextPageToken, files(id, driveId, name, mimeType, size , modifiedTime)";
		params.pageSize = this.authConfig.search_result_list_page_size;
		params.orderBy = 'folder, name, modifiedTime desc';

		let url = 'https://www.googleapis.com/drive/v3/files';
		url += '?' + enQuery(params);
		let requestOption = await this.requestOptions();
		let response;
		for (let i = 0; i < 3; i++) {
			response = await fetch(url, requestOption);
			if (response.ok) {
				break;
			}
			await sleep(800 * (i + 1));
		}
		let res_obj = await response.json();

		return {
			nextPageToken: res_obj.nextPageToken || null,
			curPageIndex: page_index,
			data: res_obj
		};
	}

	async findParentFilesRecursion(child_id, drive_index_no, contain_myself = true) {
		const gd = this;
		const gd_root_id = gd.root.id;
		const user_drive_real_root_id = authConfig.user_drive_real_root_id;
		const is_user_drive = gd.root_type === DriveFixedTerms.gd_root_type.user_drive;
		const target_top_id = is_user_drive ? user_drive_real_root_id : gd_root_id;
		const fields = DriveFixedTerms.default_file_fields;
		const parent_files = [];
		let meet_top = false;
		async function addItsFirstParent(file_obj) {
			if (!file_obj) return;
			if (!file_obj.parents) return null;
			if (file_obj.parents.length < 1) return;
			let p_ids = file_obj.parents;
			if (p_ids && p_ids.length > 0) {
				const first_p_id = p_ids[0];
				console.log(first_p_id)
				if (drive_list.includes(first_p_id)) {
					meet_top = true;
					drive_index_no = drive_list.indexOf(first_p_id);
					return drive_index_no;
				}
				const p_file_obj = await gd.findItemById(first_p_id);
				if (p_file_obj && p_file_obj.id) {
					parent_files.push(p_file_obj);
					await addItsFirstParent(p_file_obj);
				}
			}
			return drive_index_no;
		}

		const child_obj = await gd.findItemById(child_id);
		if (contain_myself) {
			parent_files.push(child_obj);
		}
		const drive_id = await addItsFirstParent(child_obj);
		console.log("parents -- " + JSON.stringify(parent_files))
		return meet_top ? [parent_files, drive_index_no] : null;
	}

	async findPathById(child_id) {
		let p_files
		let drive_index_no = 0;
		try {
			[p_files, drive_index_no] = await this.findParentFilesRecursion(child_id);
		} catch (error) {
			return null;
		}

		if (!p_files || p_files.length < 1) return '';

		let cache = [];
		// Cache the path and id of each level found
		p_files.forEach((value, idx) => {
			const is_folder = idx === 0 ? (p_files[idx].mimeType === DriveFixedTerms.folder_mime_type) : true;
			let path = '/' + p_files.slice(idx).map(it => encodeURIComponent(it.name)).reverse().join('/');
			if (is_folder) path += '/';
			cache.push({
				id: p_files[idx].id,
				path: path
			})
		});
		return [cache[0].path, drive_index_no];
	}

	async findItemById(id) {
		const is_user_drive = this.root_type === DriveFixedTerms.gd_root_type.user_drive;
		let url = `https://www.googleapis.com/drive/v3/files/${id}?fields=${DriveFixedTerms.default_file_fields}${is_user_drive ? '' : '&supportsAllDrives=true'}`;
		let requestOption = await this.requestOptions();
		let res = await fetch(url, requestOption);
		return await res.json()
	}

	async findPathId(path) {
		let c_path = '/';
		let c_id = this.paths[c_path];

		let arr = path.trim('/').split('/');
		for (let name of arr) {
			c_path += name + '/';

			if (typeof this.paths[c_path] == 'undefined') {
				let id = await this._findDirId(c_id, name);
				this.paths[c_path] = id;
			}

			c_id = this.paths[c_path];
			if (c_id == undefined || c_id == null) {
				break;
			}
		}
		return this.paths[path];
	}

	async _findDirId(parent, name) {
		name = decodeURIComponent(name).replace(/\'/g, "\\'");
		if (parent == undefined) {
			return null;
		}

		let url = 'https://www.googleapis.com/drive/v3/files';
		let params = {
			'includeItemsFromAllDrives': true,
			'supportsAllDrives': true
		};
		params.q = `'${parent}' in parents and mimeType = 'application/vnd.google-apps.folder' and name = '${name}'  and trashed = false`;
		params.fields = "nextPageToken, files(id, name, mimeType)";
		url += '?' + enQuery(params);
		let requestOption = await this.requestOptions();
		let response;
		for (let i = 0; i < 3; i++) {
			response = await fetch(url, requestOption);
			if (response.ok) {
				break;
			}
			await sleep(800 * (i + 1));
		}
		let obj = await response.json();
		if (obj.files[0] == undefined) {
			return null;
		}
		return obj.files[0].id;
	}

	/*async getAccessToken() {
	  console.log("accessToken");
	  if (this.authConfig.expires == undefined || this.authConfig.expires < Date.now()) {
	    const obj = await fetchAccessToken();
	    if (obj.access_token != undefined) {
	      this.authConfig.accessToken = obj.access_token;
	      this.authConfig.expires = Date.now() + 3500 * 1000;
	    }
	  }
	  return this.authConfig.accessToken;
	}*/

	/*async fetchAccessToken() {
	  console.log("fetchAccessToken");
	  const url = "https://www.googleapis.com/oauth2/v4/token";
	  const headers = {
	    'Content-Type': 'application/x-www-form-urlencoded'
	  };
	  var post_data;
	  if (this.authConfig.service_account && typeof this.authConfig.service_account_json != "undefined") {
	    const jwttoken = await JSONWebToken.generateGCPToken(this.authConfig.service_account_json);
	    post_data = {
	      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
	      assertion: jwttoken,
	    };
	  } else {
	    post_data = {
	      client_id: this.authConfig.client_id,
	      client_secret: this.authConfig.client_secret,
	      refresh_token: this.authConfig.refresh_token,
	      grant_type: "refresh_token",
	    };
	  }

	  let requestOption = {
	    'method': 'POST',
	    'headers': headers,
	    'body': enQuery(post_data)
	  };

	  let response;
	  for (let i = 0; i < 3; i++) {
	    response = await fetch(url, requestOption);
	    if (response.ok) {
	      break;
	    }
	    await sleep(800 * (i + 1));
	  }
	  return await response.json();
	}*/

	async fetch200(url, requestOption) {
		let response;
		for (let i = 0; i < 3; i++) {
			response = await fetch(url, requestOption);
			if (response.ok) {
				break;
			}
			await sleep(800 * (i + 1));
		}
		return response;
	}

	async requestOptions(headers = {}, method = 'GET') {
		const Token = await getAccessToken();
		headers['authorization'] = 'Bearer ' + Token;
		return {
			'method': method,
			'headers': headers
		};
	}


	/*sleep(ms) {
	  return new Promise(function(resolve, reject) {
	    let i = 0;
	    setTimeout(function() {
	      console.log('sleep' + ms);
	      i++;
	      if (i >= 2) reject(new Error('i>=2'));
	      else resolve(i);
	    }, ms);
	  })
	}*/
}
// end of class googleDrive
const drive = new googleDrive(authConfig, 0);
async function download(id, range = '', inline) {
	let url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media`;
	const requestOption = await drive.requestOptions();
	requestOption.headers['Range'] = range;
	let file = await drive.findItemById(id);
	if (!file.name) {
		return new Response(`{"error":"Unable to Find this File, Try Again."}`, {
			status: 500,
			headers: {
				"content-type": "application/json",
				"Access-Control-Allow-Origin": authConfig.cors_domain,
				"Cache-Control": "max-age=3600",
			}
		});
	}
	let res;
	for (let i = 0; i < 3; i++) {
		res = await fetch(url, requestOption);
		if (res.ok) {
			break;
		}
		sleep(800 * (i + 1));
		console.log(res);
	}
	if (uiConfig.second_domain_for_dl == 'true') {
		const res = await fetch(uiConfig.jsdelivr_cdn_src+ "@" + uiConfig.version + "/assets/disable_download.html");
		return new Response(await res.text(), {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		})
	} else if (res.ok) {
		const {
			headers
		} = res = new Response(res.body, res)
		headers.set("Content-Disposition", `attachment; filename="${file.name}"`);
		headers.set("Content-Length", file.size);
		authConfig.enable_cors_file_down && headers.append('Access-Control-Allow-Origin', '*');
		inline === true && headers.set('Content-Disposition', 'inline');
		return res;
	} else if (res.status == 404) {
		return new Response(not_found, {
			status: 404,
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		})
	} else if (res.status == 403) {
		const details = await res.text()
		return new Response(details, {
			status: 403,
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		})
	} else {
		const details = await res.text()
		/*const res = await fetch(`${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/download_error.html`);
		return new Response(await res.text(), {
		  headers: {
		    "content-type": "text/html;charset=UTF-8",
		  },
		})*/
		return new Response(details, {})
	}
}


String.prototype.trim = function(char) {
	if (char) {
		return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
	}
	return this.replace(/^\s+|\s+$/g, '');
};


function decodeJwtToken(token) {
	const base64Url = token.split('.')[1];
	const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));

	return JSON.parse(jsonPayload);
}

async function send2Telegram(message) {
	const LOG_URL = "https://api.telegram.org/bot"+ authConfig.Telegram_BotToken +"/sendMessage";
	let json = {
		chat_id: authConfig.Telegram_ChatID,
		text: message,
	}
	if (authConfig.enable_Telegram_alert) {
		await fetch(LOG_URL, {
			method: 'POST',
			body: JSON.stringify(json),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request, event).catch(
      (err) => new Response("<html><p>While Errors Should Not Happen, if happens, try reloading the Page.</p><br><br>" + err.stack + "<script>setTimeout(function(){window.location.reload(1);}, 5000);</script></html>", { status: 500 })
    )
    );
});
