export default `<div class="login-modal not-display" id="login-modal">
<div class="modal-content" id="modal-content">
    <div id="modal-title">
        <button id="close-modal-button">x</button>
    </div>  
    <form id="login-form">
        <div class="login-input-container">
            <div class="input-group mb-2 form-input">
                <div class="input-group-prepend">
                <div class="input-group-text">Username</div>
                </div>
                <input type="text" class="form-control" id="username" placeholder="Username">
            </div>
        </div>
        <div class="login-input-container">
            <div class="input-group mb-2 form-input">
                <div class="input-group-prepend">
                <div class="input-group-text">Password</div>
                </div>
                <input type="password" class="form-control" id="password" placeholder="****">
            </div>
        </div>
        <button class="btn" type="submit">Log In</button>
        <button class="btn" type="button">Sign Up</button>
    </form>
</div>
</div>
<div id="main-box">
<div id="main-content">
<div class="header">

    <img src="./src/img/logo2.png" alt="logo" width="40" height="40"> 
    <div class="header-right">
    <a class="header-link" href="#home" id="link-01">SEND MONEY</a>
    <a class="header-link" href="#home" id="link-02">BUSINESS & API</a>
    <a class="header-link" href="#home" id="link-03">TOOLS</a>
    <a class="header-link" href="#home" id="link-04">RESOURCES</a>
    <a class="header-button" href="#home">HOME</a>
    <a class="header-button" href="#contact">GET THE APP</a>
    <a class="header-button login-btn" href="#about" id="login-button">Log In</a>
    </div>

    <div class="header-collapsibles">
        <div class="collap not-display collapsible-content" id="link-01-collapsible">
            <div class="row collapsible-content">
                <div align="center"  class="col-md-4 collapsible-content">
                    <a class="fa fa-paper-plane collapsible-content"></a>
                    <br>
                    <strong class="collap-title collapsible-content">Money transfers</strong>
                    <p>Fast, easy, secure international money transfers</p>
                </div>
                <div align="center"  class="col-md-4 collapsible-content center-col">
                    <a class="fa fa-user collapsible-content"></a>
                    <br>
                    <strong class="collap-title collapsible-content">Sign up</strong>
                    <p>Register for your Money Transfer Account</p>
                </div>
                <div align="center"  class="col-md-4 collapsible-content">
                    <a class="fa fa-compass collapsible-content"></a>
                    <br>
                    <strong class="collap-title collapsible-content">How It Works</strong>
                    <p>Discover how easy it is to transfer money with us</p>
                </div>
            </div>
        </div>
        <div class="collap not-display collapsible-content" id="link-02-collapsible">
            <div class="row collapsible-content justify-content-md-center">
                <div align="center"  class="col-md-4 collapsible-content">
                    <a class="fa fa-briefcase collapsible-content"></a>
                    <br>
                    <strong class="collap-title collapsible-content">Business money transfers</strong>
                    <p>International payments for your business</p>
                </div>
                <div align="center"  class="col-md-4 collapsible-content center-col">
                    <a class="fa fa-users collapsible-content"></a>
                    <br>
                    <strong class="collap-title collapsible-content">Sign up</strong>
                    <p>Register for a business payments account</p>
                </div>
                <div align="center"  class="col-md-4 collapsible-content">
                    <a class="fa fa-cloud collapsible-content"></a>
                    <br>
                    <strong class="collap-title collapsible-content">Currency API</strong>
                    <p>Use our globally trusted exchange rates for your business</p>
                </div>
            </div>
        </div>
        <div class="collap not-display collapsible-content" id="link-03-collapsible">
            <div class="row collapsible-content justify-content-md-center">
                <div align="center" class="col-md-4 collapsible-content">
                    <a class="fa fa-euro collapsible-content"></a>
                    <br>
                    <strong class="collap-title collapsible-content">Currency converter</strong>
                    <p>Check today's rates</p>
                </div>
                <div align="center"  class="col-md-4 collapsible-content center-col">
                    <a class="fa fa-line-chart collapsible-content"></a>
                    <br>
                    <strong class="collap-title collapsible-content">Currency charts</strong>
                    <p>Review historical trends for any currency pair up to the last 10 years</p>
                </div>
                <div align="center"  class="col-md-4 collapsible-content">
                    <a class="fa fa-bell collapsible-content"></a>
                    <br>
                    <strong class="collap-title collapsible-content">Rate alerts</strong>
                    <p>Set your target rate and we will alert you once met</p>
                </div>
            </div>
        </div>
        <div class="collap not-display collapsible-content" id="link-04-collapsible">
            <div class="row collapsible-content justify-content-md-center">
                <div align="center"  class="col-md-4 collapsible-content">
                    <a class="fa fa-newspaper-o collapsible-content"></a>
                    <br>
                    <strong class="collap-title collapsible-content">Blog</strong>
                    <p>Stories about how to live your best international life, or succeed in the global marketplace</p>
                </div>
                <div align="center"  class="col-md-4 collapsible-content center-col">
                    <a class="fa fa-lightbulb-o collapsible-content"></a>
                    <br>
                    <strong class="collap-title collapsible-content">Money Tranfer Tips</strong>
                    <p>Learn currency exchange basics and get tips for your next international transfer</p>
                </div>
                <div align="center" class="col-md-4 collapsible-content">
                    <a class="fa fa-question-circle collapsible-content"></a>
                    <br>
                    <strong class="collap-title collapsible-content">FAQ</strong>
                    <p>Find answers to common questions about us and our services</p>
                </div>
            </div>
        </div>
    </div>
</div> 

<h1 id="currency-title">Currency Converter</h1>
<div align="center">
<div id="exchange-box">
    <strong>Please fill in the form to access a list of exchange rates according to your preferences</strong>
    <br>
    <form>
        <div class="container">
            <div class="row form-rows justify-content-md-center">
              <div class="col-sm">
                <select class="form-control form-input" id="select-menu">
                </select>
              </div>
              <div class="col-sm">
                <div class="input-group mb-2 form-input">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Date</div>
                    </div>
                    <input type="date" class="form-control" id="dateInput" value="2020-01-30" min="1999-01-04">
                </div>
              </div>
              <div class="col-sm">
                <div class="input-group mb-2 form-input">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Amount</div>
                    </div>
                    <input type="text" class="form-control" id="amountInput" placeholder="Amount">
                    <div class="invalid-feedback" id="amount-error">
                        
                      </div>
                </div>
              </div>
            </div>
            <div class="row form-rows justify-content-md-center">
                <div class="col-sm">
                <button class="btn btn-outline-light" id="convert-button" type="button">Convert</button>
                </div>
            </div>
        </div>
    </form>
</div>
</div>
</div>
</div>

<div class="not-display" id="conversion-box">

<!--here will go the conversion table-->

</div>

<div id="info-box">
<div align="center">
    <div class="row justify-content-md-center">
        <div class="col-sm info-quadrant">
            <img src="./src/img/award.png" alt="about-us"><br>
            <strong class="quadrant-title">Proudly serving our clients since 2020</strong>
            <ul>
                <li>World's trusted</li>
                <li>280 million visitors a year</li>
                <li>65 million app downloads</li>
            </ul>
        </div>

        <div class="col-sm info-quadrant">
            <img src="./src/img/infinity.png" alt="API"><br>
            <strong class="quadrant-title">Currency data API</strong>
            <ul>
                <li>Accurate rates for businesses</li>
                <li>Simple integration</li>
                <li>Flexible packages</li>
            </ul>
        </div>
    </div>
    <div class="row justify-content-md-center">
        <div class="col-sm info-quadrant inferior">
            <img src="./src/img/alert2.png" alt="alerts"><br> 
            <strong class="quadrant-title">Rate alerts</strong>
            <ul>
                <li>Choose a currency pair</li>
                <li>Set your desired mid-market rate</li>
                <li>Receive free alerts by mail</li>
            </ul>
        </div>

        <div class="col-sm info-quadrant inferior">
            <img src="./src/img/sparkles.png" alt="app"><br>
            <strong class="quadrant-title">Our currency app</strong>
            <br>
            <img src="./src/img/google_play_badge.png" alt="google play" width="20%">
            <img src="./src/img/apple_store_badge.png" alt="apple store" width="20%">
        </div>
    </div>
</div>
</div>

<div class="fixed-footer fixed">
    <div class="row">
        <div class="col-md-3">
            <p class="footer-title">Exchange rates</p>
        </div>
        <div class="col-md-3">
            <strong class="footer-title">Images</strong>
        </div>
        <div class="col-md-3">
            <strong class="footer-title">Site Info</strong>
        </div>
        <div class="col-md-3">
            <strong class="footer-title">Subscribe</strong>
        </div>
    </div>


    <div class="row">
        <div class="col-md-3"> 
            <a href="#" style="text-decoration:none">About us</a>
        </div>
        <div class="col-md-3">
            <a href="https://www.freepik.es/fotos-vectores-gratis/fondo" style="text-decoration:none">Background vector by starline</a>
        </div>
        <div class="col-md-3">
            <a href="https://exchangeratesapi.io/" style="text-decoration:none">Exchange rates API</a>
        </div>
        <div class="col-md-3">
            <input type="text"></input><button><a class="fa fa-paper-plane collapsible-content"></a></button>
        </div>
    </div>

    <div class="row">
        <div class="col-md-3">
            <a href="#" style="text-decoration:none">Carrers</a>
        </div>
        <div class="col-md-3">
            <a href="https://www.freepik.com/free-vector/money-icons_785252.htm" style="text-decoration:none">Money logo by freepik</a>
        </div>
        <div class="col-md-3">
            <a href="https://www.xe.com/" style="text-decoration:none">Inspired by XE</a>
            
        </div>

    </div>
    <div class="row">
        <div class="col-md-3"> 
            <a href="#" style="text-decoration:none">Contact us</a>
        </div>
        <div class="col-md-3">
        </div>
        <div class="col-md-3">
            <a href="https://github.com/pvmelli" style="text-decoration:none">pvmelli</a>
        </div>
</div>

</div>
<div id="inferior-footer">
    <div class="row">
        <div class="col-md-7">
            <strong>2020 &copy; Paula Melli</strong>  
        </div>
        <div align="right" class="col-md-5">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
        </div>
    </div>
</div>


<script type="module" src='index.js'></script>`