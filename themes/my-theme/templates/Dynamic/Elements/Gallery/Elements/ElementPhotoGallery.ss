<% if $Title && $ShowTitle %><h2 class="gallery__title">$Title</h2><% end_if %>

<div class="gallery__wrapper">
    <% if $Images %>
        <% loop $Images %>
            <div class="gallery__image-wrapper">
                <a class="gallery__image-link" href="$Image.URL" data-lightbox="gallery-{$Up.ID}" data-title="<h4>$Title</h4> $Content">
                    <img class="gallery__image" src="$Image.Fill(576,576).URL" alt="$Image.Title">
                </a>
            </div>
        <% end_loop %>
    <% end_if %>
</div>

<% require css('dynamic/silverstripe-elemental-gallery: thirdparty/lightbox/lightbox.css') %>

<% require javascript('silverstripe/admin: thirdparty/jquery/jquery.js') %>
<% require javascript('dynamic/silverstripe-elemental-gallery: thirdparty/lightbox/lightbox.min.js') %>
