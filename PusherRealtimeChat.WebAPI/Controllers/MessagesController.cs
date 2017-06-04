using PusherRealtimeChat.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PusherServer;

namespace PusherRealtimeChat.WebAPI.Controllers
{
    public class MessagesController : ApiController
    {
        private static List<ChatMessage> messages = new List<ChatMessage>()
           {
                new ChatMessage
                {
                    AuthorTwitterHandle = "Pusher",
                    Text = "Hi there! ?"
                },
                new ChatMessage
                {
                    AuthorTwitterHandle = "Pusher",
                    Text = "Welcome to your chat app"
                }
           };

        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(
                HttpStatusCode.OK,
                messages);
        }

        public HttpResponseMessage Post(ChatMessage message)
        {
            if (message == null || !ModelState.IsValid)
            {
                return Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest,
                    "Invalid input");
            }

            messages.Add(message);

            var options = new PusherOptions { Encrypted = true };
            var pusher = new Pusher(
              "346358",
              "6afcfac36f8061b36feb",
              "01f3e6dcc1edeacba79c",
              options);

            pusher.TriggerAsync(
                channelName: "messages_channel",
                eventName: "new_message_evt",
                data: new
                {
                    AuthorTwitterHandle = message.AuthorTwitterHandle,
                    Text = message.Text
                });

            return Request.CreateResponse(HttpStatusCode.Created);
        }
    }
}
