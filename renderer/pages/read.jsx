import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

function Read() {
  return (
    <React.Fragment>
      <Head>
        <title>Mail Details</title>
      </Head>
      
      <div id="main-wrapper" className="show">
        <div className="content-body" style={{minHeight:100+'vh'}}>
          <div className="container-fluid">
						<div className="modal fade" id="addOrderModalside">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">Add Event</h5>
										<button type="button" className="close" data-dismiss="modal"><span>×</span></button>
									</div>
									<div className="modal-body">
										<form>
											<div className="form-group">
												<label className="text-black font-w500">Event Name</label>
												<input type="text" className="form-control" />
											</div>
											<div className="form-group">
												<label className="text-black font-w500">Event Date</label>
												<input type="date" className="form-control" />
											</div>
											<div className="form-group">
												<label className="text-black font-w500">Description</label>
												<input type="text" className="form-control" />
											</div>
											<div className="form-group">
												<button type="button" className="btn btn-primary">Create</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="page-titles">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="/next">Email</a></li>
								<li className="breadcrumb-item active"><a href="/next">Read</a></li>
							</ol>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="card">
									<div className="card-body">
										<div className="email-left-box px-0 mb-3">
											<div className="p-0">
												<Link href="/compose">
													<a className="btn btn-primary btn-block">Compose</a>
												</Link>
											</div>
											<div className="mail-list mt-4">
												<Link href="/read">
													<a className="list-group-item active">
														<i className="fa fa-inbox font-18 align-middle mr-2"></i> Inbox <span className="badge badge-primary badge-sm text-white float-right">198</span>
													</a>
												</Link>
												<Link href="/outbox">
													<a className="list-group-item">
														<i className="fa fa-paper-plane font-18 align-middle mr-2"></i>Outbox <span className="badge badge-primary badge-sm text-white float-right">198</span>
													</a>
												</Link>
												<Link href="/compose">
													<a className="list-group-item">
														<i className="fa fa-star-o font-18 align-middle mr-2"></i>Important <span className="badge badge-danger text-white badge-sm float-right">47</span>
													</a>
												</Link>
												<Link href="/compose">
													<a className="list-group-item">
														<i className="mdi mdi-file-document-box font-18 align-middle mr-2"></i>Draft
													</a>
												</Link>
												<Link href="/compose">
													<a className="list-group-item">
														<i className="fa fa-trash font-18 align-middle mr-2"></i>Trash
													</a>
												</Link>
											</div>
											<div className="intro-title d-flex justify-content-between">
												<h5>Categories</h5>
												<i className="fa fa-chevron-down" aria-hidden="true"></i>
											</div>
											<div className="mail-list mt-4">
												<Link href="/next">
													<a className="list-group-item">
													<span className="icon-warning">
														<i className="fa fa-circle" aria-hidden="true"></i>
													</span>	Work 
													</a>
												</Link>
												<Link href="/next">
													<a className="list-group-item">
													<span className="icon-primary">
														<i className="fa fa-circle" aria-hidden="true"></i>
													</span>	Private 
													</a>
												</Link>
												<Link href="/next">
													<a className="list-group-item">
													<span className="icon-success">
														<i className="fa fa-circle" aria-hidden="true"></i>
													</span>	Support 
													</a>
												</Link>
												<Link href="/next">
													<a className="list-group-item">
													<span className="icon-dpink">
														<i className="fa fa-circle" aria-hidden="true"></i>
													</span>	Social 
													</a>
												</Link>
											</div>
										</div>
										<div className="email-right-box ml-0 ml-sm-4 ml-sm-0">
											<div className="toolbar mb-4" role="toolbar">
												<div className="btn-group mb-1">
													<button type="button" className="btn btn-primary light px-3"><i className="fa fa-archive"></i></button>
													<button type="button" className="btn btn-primary light px-3"><i className="fa fa-exclamation-circle"></i></button>
													<button type="button" className="btn btn-primary light px-3"><i className="fa fa-trash"></i></button>
												</div>
												<div className="btn-group mb-1">
													<button type="button" className="btn btn-primary light dropdown-toggle px-3" data-toggle="dropdown">
														<i className="fa fa-folder"></i> <b className="caret m-l-5"></b>
													</button>
													<div className="dropdown-menu">
														<Link href="/next">
															<a className="dropdown-item">Social</a>
														</Link> 
														<Link href="/next">
															<a className="dropdown-item">Promotions</a>
														</Link> 
														<Link href="/next">
															<a className="dropdown-item">Updates</a>
														</Link>
														<Link href="/next">
															<a className="dropdown-item">Forums</a>
														</Link>
													</div>
												</div>
												<div className="btn-group mb-1">
													<button type="button" className="btn btn-primary light dropdown-toggle px-3" data-toggle="dropdown">
														<i className="fa fa-tag"></i> <b className="caret m-l-5"></b>
													</button>
													<div className="dropdown-menu"> 
														<Link href="/next">
															<a className="dropdown-item">Updates</a>
														</Link> 
														<Link href="/next">
															<a className="dropdown-item">Social</a>
														</Link> 
														<Link href="/next">
															<a className="dropdown-item">Promotions</a>
														</Link>
														<Link href="/next">
															<a className="dropdown-item">Forums</a>
														</Link>
													</div>
												</div>
												<div className="btn-group mb-1">
													<button type="button" className="btn btn-primary light dropdown-toggle v" data-toggle="dropdown">More <span className="caret m-l-5"></span>
													</button>
													<div className="dropdown-menu">
														<Link href="/next">
															<a className="dropdown-item">Mark as Unread</a>
														</Link>
														<Link href="/next">
															<a className="dropdown-item">Add to Tasks</a>
														</Link>
														<Link href="/next">
															<a className="dropdown-item">Add Star</a>
														</Link>
														<Link href="/next">
															<a className="dropdown-item">Mute</a>
														</Link>
													</div>
												</div>
											</div>
											<div className="read-content">
												<div className="media pt-3 d-sm-flex d-block justify-content-between">
													<div className="clearfix mb-3 d-flex">
														<img className="mr-3 rounded" width="50" alt="image" src="/assets/1.jpg" />
														<div className="media-body mr-2">
															<h5 className="text-primary mb-0 mt-1">Ingredia Nutrisha</h5>
															<p className="mb-0">20 May 2018</p>
														</div>
													</div>
													<div className="clearfix mb-3">
														<Link href="/next">
															<a className="btn btn-primary px-3 light"><i className="fa fa-reply"></i> </a>
														</Link>
														<Link href="/next">
															<a className="btn btn-primary px-3 light ml-2"><i className="fa fa-long-arrow-right"></i> </a>
														</Link>
														<Link href="/next">
															<a className="btn btn-primary px-3 light ml-2"><i className="fa fa-trash"></i></a>
														</Link>
													</div>
												</div>
												<hr />
												<div className="media mb-2 mt-3">
													<div className="media-body"><span className="pull-right">07:23 AM</span>
														<h5 className="my-1 text-primary">A collection of textile samples lay spread</h5>
														<p className="read-content-email">To: Me, info@example.com</p>
													</div>
												</div>
												<div className="read-content-body">
													<h5 className="mb-4">Hi,Ingredia,</h5>
													<p className="mb-2"><strong>Ingredia Nutrisha,</strong> A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture</p>
													<p className="mb-2">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
													</p>
													<p className="mb-2">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,</p>
													<h5 className="pt-3">Kind Regards</h5>
													<p>Mr Smith</p>
													<hr />
												</div>
												<div className="read-content-attachment">
													<h6><i className="fa fa-download mb-2"></i> Attachments
														<span>(3)</span>
													</h6>
													<div className="row attachment">
														<div className="col-auto">
															<Link href="/next">
																<a className="text-muted">My-Photo.png</a>
															</Link>
														</div>
														<div className="col-auto">
															<Link href="/next">
																<a className="text-muted">My-File.docx</a>
															</Link>
														</div>
														<div className="col-auto">
															<Link href="/next">
																<a className="text-muted">My-Resume.pdf</a>
															</Link>
														</div>
													</div>
												</div>
												<hr />
												<div className="form-group pt-3">
													<textarea name="write-email" id="write-email" cols="30" rows="5" className="form-control" placeholder="It&#39;s really an amazing.I want to know more about it..!"></textarea>
												</div>
											</div>
											<div className="text-right">
												<button className="btn btn-primary " type="button">Send</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
        </div>
        <div className="footer">
					<div className="copyright">
						<p>Copyright &copy; <Link href="/next"><a href="/next" target="_blank">MailAnt</a></Link> 2023</p>
					</div>
        </div>
    	</div>

      <Script>
        {/* <script src="./assets/js/global.min.js"></script>
        <script src="./assets/js/bootstrap-select.min.js"></script>
        <script src="./assets/js/dropzone.js"></script> */}
      </Script>
    </React.Fragment>
  );
};

export default Read;
