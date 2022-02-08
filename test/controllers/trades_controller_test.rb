require "test_helper"

class TradesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get trades_show_url
    assert_response :success
  end

  test "should get create" do
    get trades_create_url
    assert_response :success
  end

  test "should get destroy" do
    get trades_destroy_url
    assert_response :success
  end
end
