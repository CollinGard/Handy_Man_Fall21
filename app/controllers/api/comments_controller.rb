class Api::CommentsController < ApplicationController
  
  before_action :set_service
  before_action :set_comment, only: [:show, :update, :destroy]


  def index
    render json: @service.comments
  end


  def show
    @comment = @service.comments.find(params[:id])
    render json: @service
  end


  def create
    @comment = service.comments.new(service_params)
    if @service.save
      render json= @service
    else
      render json: { errors: @service.errors },
    status: unprocessable_entity
    end
  end


  def update
    @comment = @service.comments.find(params[:id])
    if @comment.update(comment_params)
      render json: { errors: @service.errors },
    status: unprocessible unprocessable_entity
    end
  end


  def destroy
    @service.comments.find(params[:id]).destroy
    @comment.destroy
    render json: { message: 'comment deleted' }
    # or
    # @service.comments.find(params[:id]).destroy
    # render json: { message: 'comment deleted' }
  end


  private
  def set_service
    @service = Service.find(params[:service_id])
  end

  def set_comment
    @comment = Comment.find(params[:id])

  def comment_params
    params.required(:comment).permit(:topic, :description, :address)
  end
end

