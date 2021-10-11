<% if $Title && $ShowTitle %><h2 class="gallery__title">$Title</h2><% end_if %>

<div class="">
    <% if $Images %>
        <% loop $Images %>
            <div class="" style="margin-bottom: 30px;">
                <a href="$Image.URL" data-lightbox="gallery-{$Up.ID}" data-title="<h4>$Title</h4> $Content">
                    <img src="$Image.Fill(576,576).URL" alt="$Image.Title" class="">
                </a>
            </div>
        <% end_loop %>
    <% end_if %>
</div>

<% require css('dynamic/silverstripe-elemental-gallery: thirdparty/lightbox/lightbox.css') %>

<% require javascript('silverstripe/admin: thirdparty/jquery/jquery.js') %>
<% require javascript('dynamic/silverstripe-elemental-gallery: thirdparty/lightbox/lightbox.min.js') %>
