require "test_helper"

class ArtworksControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get artworks_show_url
    assert_response :success
  end

  test "should get create" do
    get artworks_create_url
    assert_response :success
  end

  test "should get destroy" do
    get artworks_destroy_url
    assert_response :success
  end
end
