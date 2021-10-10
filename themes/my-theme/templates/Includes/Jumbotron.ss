<section class="jumbotron mt-3 pb-1 text-center bg-light m-0">
    <div class="container">
        <h1 class="jumbotron__title">What We Do</h1>
        <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!
        </p>
    </div>
</section>

<div class="container mt-3 mb-5">
    <div class="row justify-content-center">
        <% loop $FeaturedPets %>
            <div class="col-sm-6 col-lg-3 p-0">
                <div class="card m-3">
                    <% if $PrimaryPhoto.Link %>
                        <img src="$PrimaryPhoto.Link" class="card-img-top" alt="photo">
                    <% else %>
                        <img src="$DefaultPetImage" class="card-img-top" alt="photo">
                    <% end_if %>
                    <div class="card-body">
                        <h5 class="card-title">Adopt a Dog</h5>
                        <h2 class="card-text">$Name</h2>
                        <p class="card-text">Globally parallel task premium infomediaries - <span>$Breed</span></p>
                        <a href="$Link" class="button-link border-0 color">Read More</a>
                    </div>
                </div>
            </div>
        <% end_loop %>
    </div>
</div>
