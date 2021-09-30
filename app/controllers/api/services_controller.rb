class Api::ServicesController < ApplicationController
  
  before_action :set_worker
  # before_action :set_service, only: [:show, :updet, :destroy]

  def index
    render json: @worker.services
  end


  def show
    @service = @worker.services.find(params[:id])
    render json: @service
  end


  def create
    @service = @worker.services.new(service_params)
    if @service.save
      render json: @service
    else
      render json: {errors: @service.errors }, 
      status: :unprocessable_entity
    end
  end


  def update
    @service = @worker.services.find(params{:id})
    if @service.update(service_params)
      render json: @service
    else
      render json: {errors: @service.errors }, 
      status: :unprocessable_entity
    end
  end


  def destroy
    @worker.services.find(params[:id]).destroy
    @service.destroy
    render json: { message: 'service deleted' }
    # or
    # @worker.services.find(params[:id]).destroy
    # render json: {message: 'service deleted'}
  end

  private
    def set_worker
      @worker = Worker.find(params[:worker_id])
    end

    # def set_service
    #   @service = Service.find(params[:id])
    # end

    def service_params
      params.require(:service).permit(:job_type, :cost, :date)
    end
    
  end

