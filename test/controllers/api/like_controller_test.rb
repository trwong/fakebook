require 'test_helper'

class Api::LikeControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_like_show_url
    assert_response :success
  end

  test "should get create" do
    get api_like_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_like_destroy_url
    assert_response :success
  end

end
